import { NextRequest } from 'next/server';
import { verifyToken } from './auth';

export const getUserIdFromRequest = async (req: NextRequest): Promise<string | null> => {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return null;

  const decoded = verifyToken(token);
  return decoded?.userId || null;
};
