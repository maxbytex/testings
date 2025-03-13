import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsCreateManyProviderInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    total: z.number(),
    source: z.string().optional(),
  })
  .strict();

export const billingsCreateManyProviderInputObjectSchema = Schema;
