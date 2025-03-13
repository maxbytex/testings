import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateManyInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string().optional(),
    total_regex: z.string().optional(),
    date_regex: z.string().optional(),
    notes_regex: z.string().optional(),
    amount_regex: z.string().optional(),
    email: z.string().optional(),
    body_regex: z.string().optional(),
    specializationId: z.number(),
  })
  .strict();

export const providersCreateManyInputObjectSchema = Schema;
