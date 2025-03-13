import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvidersAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    specializationId: z.literal(true).optional(),
  })
  .strict();

export const ProvidersAvgAggregateInputObjectSchema = Schema;
