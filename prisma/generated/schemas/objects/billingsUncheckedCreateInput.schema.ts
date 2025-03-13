import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    total: z.number(),
    providerId: z.number(),
    source: z.string().optional(),
  })
  .strict();

export const billingsUncheckedCreateInputObjectSchema = Schema;
