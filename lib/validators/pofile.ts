import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.number().min(18).max(100),
  gender: z.enum(['male', 'female', 'non_binary', 'other']),
  sexuality: z.enum(['straight', 'gay', 'lesbian', 'bisexual', 'pansexual', 'asexual', 'other']),
  city: z.string().min(2),
  state: z.string().min(2),
  country: z.string().min(2),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  bio: z.string().max(500).optional(),
  hobbies: z.array(z.string()).max(10),
  interests: z.array(z.string()).max(15),
  occupation: z.string().max(100).optional(),
  education: z.string().max(100).optional(),
  height: z.number().min(100).max(250).optional(),
  relationshipType: z.enum(['casual', 'serious', 'friends', 'open']).optional(),
  drinking: z.enum(['never', 'rarely', 'socially', 'regularly']).optional(),
  smoking: z.enum(['never', 'occasionally', 'regularly']).optional(),
  hasChildren: z.boolean().optional(),
  wantsChildren: z.enum(['yes', 'no', 'maybe', 'someday']).optional(),
  religion: z.string().max(50).optional(),
  languages: z.array(z.string()).max(10).optional(),
  isVerified: z.boolean().default(false),
  showAge: z.boolean().default(true),
  showDistance: z.boolean().default(true)
});

export type ProfileData = z.infer<typeof profileSchema>;
