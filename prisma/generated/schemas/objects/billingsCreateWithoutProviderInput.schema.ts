import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsCreateWithoutProviderInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    total: z.number(),
    source: z.string().optional(),
  })
  .strict();

export const billingsCreateWithoutProviderInputObjectSchema = Schema;
