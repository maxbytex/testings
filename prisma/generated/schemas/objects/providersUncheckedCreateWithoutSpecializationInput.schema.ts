import { z } from 'zod';
import { billingsUncheckedCreateNestedManyWithoutProviderInputObjectSchema } from './billingsUncheckedCreateNestedManyWithoutProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUncheckedCreateWithoutSpecializationInput> =
  z
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
      billings: z
        .lazy(
          () =>
            billingsUncheckedCreateNestedManyWithoutProviderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const providersUncheckedCreateWithoutSpecializationInputObjectSchema =
  Schema;
