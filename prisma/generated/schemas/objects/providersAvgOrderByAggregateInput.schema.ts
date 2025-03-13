import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    specializationId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const providersAvgOrderByAggregateInputObjectSchema = Schema;
