import { NextRequest, NextResponse } from 'next/server';
import { getUserIdFromRequest } from '@/lib/auth/getUserIdFromRequest';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const userId = await getUserIdFromRequest(req);
  
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Fetch user data or any protected resource
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { 
      id: true, 
      email: true, 
      createdAt: true,
      profile: {
        select: {
          name: true,
          age: true,
          city: true,
          state: true,
          country: true,
          bio: true,
          isVerified: true
        }
      }
    }
  });

  return NextResponse.json({ user });
}
