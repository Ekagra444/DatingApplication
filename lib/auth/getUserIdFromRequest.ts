import { NextRequest } from 'next/server';

export const getUserIdFromRequest = async (req: NextRequest): Promise<string | null> => {
  const token = req.headers.get('authorization')?.split(' ')[1];
  if (!token) return null;

  // mock logic or use JWT verify
  return null;
};
