import { z } from 'zod';
import { providersWhereInputObjectSchema } from './providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvidersRelationFilter> = z
  .object({
    is: z
      .lazy(() => providersWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => providersWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const ProvidersRelationFilterObjectSchema = Schema;
