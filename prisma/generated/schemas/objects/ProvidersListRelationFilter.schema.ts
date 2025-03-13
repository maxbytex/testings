import { z } from 'zod';
import { providersWhereInputObjectSchema } from './providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProvidersListRelationFilter> = z
  .object({
    every: z.lazy(() => providersWhereInputObjectSchema).optional(),
    some: z.lazy(() => providersWhereInputObjectSchema).optional(),
    none: z.lazy(() => providersWhereInputObjectSchema).optional(),
  })
  .strict();

export const ProvidersListRelationFilterObjectSchema = Schema;
