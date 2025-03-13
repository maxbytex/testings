import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BillingsAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    total: z.literal(true).optional(),
    providerId: z.literal(true).optional(),
  })
  .strict();

export const BillingsAvgAggregateInputObjectSchema = Schema;
