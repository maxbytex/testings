import { z } from 'zod';
import { specializationCreateNestedOneWithoutProvidersInputObjectSchema } from './specializationCreateNestedOneWithoutProvidersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateWithoutBillingsInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string().optional(),
    total_regex: z.string().optional(),
    date_regex: z.string().optional(),
    notes_regex: z.string().optional(),
    amount_regex: z.string().optional(),
    email: z.string().optional(),
    body_regex: z.string().optional(),
    specialization: z.lazy(
      () => specializationCreateNestedOneWithoutProvidersInputObjectSchema,
    ),
  })
  .strict();

export const providersCreateWithoutBillingsInputObjectSchema = Schema;
