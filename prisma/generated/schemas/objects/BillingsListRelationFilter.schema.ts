import { z } from 'zod';
import { billingsWhereInputObjectSchema } from './billingsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BillingsListRelationFilter> = z
  .object({
    every: z.lazy(() => billingsWhereInputObjectSchema).optional(),
    some: z.lazy(() => billingsWhereInputObjectSchema).optional(),
    none: z.lazy(() => billingsWhereInputObjectSchema).optional(),
  })
  .strict();

export const BillingsListRelationFilterObjectSchema = Schema;
