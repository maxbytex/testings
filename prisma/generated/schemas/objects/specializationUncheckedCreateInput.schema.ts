import { z } from 'zod';
import { providersUncheckedCreateNestedManyWithoutSpecializationInputObjectSchema } from './providersUncheckedCreateNestedManyWithoutSpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationUncheckedCreateInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    providers: z
      .lazy(
        () =>
          providersUncheckedCreateNestedManyWithoutSpecializationInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const specializationUncheckedCreateInputObjectSchema = Schema;
