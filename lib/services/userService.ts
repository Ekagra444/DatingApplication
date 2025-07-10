import { prisma } from '@/lib/prisma';
import { ProfileData } from '@/lib/validators/pofile';

const normalizeProfileData = (data: ProfileData): any => ({
  ...data,
  latitude: data.latitude ?? null,
  longitude: data.longitude ?? null,
});

export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    include: { profile: true },
  });
};

export const createUserProfile = async (userId: string, profileData: ProfileData) => {
  const data = normalizeProfileData(profileData);

  return await prisma.user.update({
    where: { id: userId },
    data: {
      profile: {
        create: data,
      },
    },
    include: { profile: true },
  });
};

export const updateUserProfile = async (userId: string, profileData: ProfileData) => {
  const data = normalizeProfileData(profileData);

  return await prisma.user.update({
    where: { id: userId },
    data: {
      profile: {
        update: data,
      },
    },
    include: { profile: true },
  });
};
