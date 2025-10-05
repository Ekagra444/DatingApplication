import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
//@ts-ignore
import nextConnect from 'next-connect';
import multer from 'multer';
import cloudinary from '@/lib/cloudinary/config';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';

/* 
  Note: Future updates might demand to add file checking that might include size checks and type checks of file, but for now i want user to seamelessly upload the image without this headache 
*/


// Multer config: store file temporarily in memory or disk
const upload = multer({ dest: '/tmp' });

// adding file 
interface NextApiRequestWithFile extends NextApiRequest {
  file: Express.Multer.File;
}
const apiRoute = nextConnect<NextApiRequestWithFile, NextApiResponse>({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('photo'));

apiRoute.post(async (req, res) => {
  try {
    const profileId = req.body.profileId as string;
    if (!profileId) {
      return res.status(400).json({ error: 'Missing profileId in request body' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'Missing photo file' });
    }

    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'dating_app_user_photos',
      use_filename: true,
      unique_filename: true,
    });

    // Remove temp file after upload
    fs.unlinkSync(req.file.path);

    // Save photo record in Prisma DB
    const photo = await prisma.userPhoto.create({
      data: {
        profileId,
        url: result.secure_url,
        publicId: result.public_id,
        isPrimary: false, // Adjust if needed
      },
    });

    res.status(200).json({ message: 'Photo uploaded successfully', photo });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, Multer handles it
  },
};

export default apiRoute;