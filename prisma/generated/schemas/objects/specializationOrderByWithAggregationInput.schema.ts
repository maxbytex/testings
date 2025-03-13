import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { specializationCountOrderByAggregateInputObjectSchema } from './specializationCountOrderByAggregateInput.schema';
import { specializationAvgOrderByAggregateInputObjectSchema } from './specializationAvgOrderByAggregateInput.schema';
import { specializationMaxOrderByAggregateInputObjectSchema } from './specializationMaxOrderByAggregateInput.schema';
import { specializationMinOrderByAggregateInputObjectSchema } from './specializationMinOrderByAggregateInput.schema';
import { specializationSumOrderByAggregateInputObjectSchema } from './specializationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => specializationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => specializationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => specializationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => specializationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => specializationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const specializationOrderByWithAggregationInputObjectSchema = Schema;
