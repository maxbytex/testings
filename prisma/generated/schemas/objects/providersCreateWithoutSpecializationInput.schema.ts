import { z } from 'zod';
import { billingsCreateNestedManyWithoutProviderInputObjectSchema } from './billingsCreateNestedManyWithoutProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateWithoutSpecializationInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string().optional(),
    total_regex: z.string().optional(),
    date_regex: z.string().optional(),
    notes_regex: z.string().optional(),
    amount_regex: z.string().optional(),
    email: z.string().optional(),
    body_regex: z.string().optional(),
    billings: z
      .lazy(() => billingsCreateNestedManyWithoutProviderInputObjectSchema)
      .optional(),
  })
  .strict();

export const providersCreateWithoutSpecializationInputObjectSchema = Schema;
