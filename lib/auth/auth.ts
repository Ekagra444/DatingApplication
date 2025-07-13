import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import { NextRequest } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET||"noneOfYouGoddamBuisness";

export const hashPassword = async (password: string): Promise<string> => {
const salt = await bcrypt.genSalt(10);
return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId },
                    JWT_SECRET, 
                { expiresIn: '6d' });
};

export const verifyToken = (token: string): { userId: string } | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: string };
  } catch {
    return null;
  }
};