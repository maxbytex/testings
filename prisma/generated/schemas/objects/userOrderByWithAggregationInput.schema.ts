import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { userCountOrderByAggregateInputObjectSchema } from './userCountOrderByAggregateInput.schema';
import { userAvgOrderByAggregateInputObjectSchema } from './userAvgOrderByAggregateInput.schema';
import { userMaxOrderByAggregateInputObjectSchema } from './userMaxOrderByAggregateInput.schema';
import { userMinOrderByAggregateInputObjectSchema } from './userMinOrderByAggregateInput.schema';
import { userSumOrderByAggregateInputObjectSchema } from './userSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.userOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => userCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => userAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => userMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => userMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => userSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const userOrderByWithAggregationInputObjectSchema = Schema;
