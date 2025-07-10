import { NextRequest, NextResponse } from 'next/server';
import { profileSchema } from '@/lib/validators/pofile';
//has to implement below 🛑🛑getUserIdFromRequest, it has not yet been implemented 
import { getUserIdFromRequest } from '@/lib/auth/getUserIdFromRequest';
import { getUserById, createUserProfile, updateUserProfile } from '@/lib/services/userService';

export async function GET(request: NextRequest) {
  const userId = await getUserIdFromRequest(request);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await getUserById(userId);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  return NextResponse.json({ success: true, profile: user || null });
}

export async function POST(request: NextRequest) {
  const userId = await getUserIdFromRequest(request);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const validation = profileSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: 'Validation failed', details: validation.error.errors }, { status: 400 });

  const user = await getUserById(userId);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const updatedUser = user.profile
    ? await updateUserProfile(userId, validation.data)
    : await createUserProfile(userId, validation.data);

  return NextResponse.json({ success: true, profile: updatedUser.profile });
}

export async function PUT(request: NextRequest) {
  const userId = await getUserIdFromRequest(request);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const partialSchema = profileSchema.partial();
  const validation = partialSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: 'Validation failed', details: validation.error.errors }, { status: 400 });

  const user = await getUserById(userId);
  if (!user || !user.profile)
    return NextResponse.json({ error: 'Profile not found' }, { status: 404 });
  // @ts-ignore -- error is due to not matching schema types bw zod's undefined .optional() and prisma null ? optional so we can ignore it 
  const updatedUser = await updateUserProfile(userId, { ...user.profile, ...validation.data });
  return NextResponse.json({ success: true, profile: updatedUser.profile });
}

export async function DELETE(request: NextRequest) {
  const userId = await getUserIdFromRequest(request);
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const user = await getUserById(userId);
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  await updateUserProfile(userId, {} as any); // clear profile
  return NextResponse.json({ success: true, message: 'Profile deleted' });
}
