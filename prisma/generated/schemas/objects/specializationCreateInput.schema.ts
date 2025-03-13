import { z } from 'zod';
import { providersCreateNestedManyWithoutSpecializationInputObjectSchema } from './providersCreateNestedManyWithoutSpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    providers: z
      .lazy(
        () => providersCreateNestedManyWithoutSpecializationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const specializationCreateInputObjectSchema = Schema;
