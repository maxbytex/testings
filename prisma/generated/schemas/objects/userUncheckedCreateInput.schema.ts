import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string(),
  })
  .strict();

export const userUncheckedCreateInputObjectSchema = Schema;
