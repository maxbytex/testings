import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { billingsCountOrderByAggregateInputObjectSchema } from './billingsCountOrderByAggregateInput.schema';
import { billingsAvgOrderByAggregateInputObjectSchema } from './billingsAvgOrderByAggregateInput.schema';
import { billingsMaxOrderByAggregateInputObjectSchema } from './billingsMaxOrderByAggregateInput.schema';
import { billingsMinOrderByAggregateInputObjectSchema } from './billingsMinOrderByAggregateInput.schema';
import { billingsSumOrderByAggregateInputObjectSchema } from './billingsSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    source: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => billingsCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => billingsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => billingsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => billingsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => billingsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const billingsOrderByWithAggregationInputObjectSchema = Schema;
