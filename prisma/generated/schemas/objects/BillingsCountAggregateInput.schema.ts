import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BillingsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    total: z.literal(true).optional(),
    providerId: z.literal(true).optional(),
    source: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const BillingsCountAggregateInputObjectSchema = Schema;
