import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvidersMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    name: z.literal(true).optional(),
    total_regex: z.literal(true).optional(),
    date_regex: z.literal(true).optional(),
    notes_regex: z.literal(true).optional(),
    amount_regex: z.literal(true).optional(),
    email: z.literal(true).optional(),
    body_regex: z.literal(true).optional(),
    specializationId: z.literal(true).optional(),
  })
  .strict();

export const ProvidersMinAggregateInputObjectSchema = Schema;
