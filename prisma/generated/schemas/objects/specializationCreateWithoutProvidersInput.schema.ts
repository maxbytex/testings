import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationCreateWithoutProvidersInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string(),
  })
  .strict();

export const specializationCreateWithoutProvidersInputObjectSchema = Schema;
