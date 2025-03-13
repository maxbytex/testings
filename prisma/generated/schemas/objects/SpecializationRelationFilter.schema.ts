import { z } from 'zod';
import { specializationWhereInputObjectSchema } from './specializationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SpecializationRelationFilter> = z
  .object({
    is: z
      .lazy(() => specializationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => specializationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SpecializationRelationFilterObjectSchema = Schema;
