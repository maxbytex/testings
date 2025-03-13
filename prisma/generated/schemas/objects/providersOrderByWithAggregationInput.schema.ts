import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { providersCountOrderByAggregateInputObjectSchema } from './providersCountOrderByAggregateInput.schema';
import { providersAvgOrderByAggregateInputObjectSchema } from './providersAvgOrderByAggregateInput.schema';
import { providersMaxOrderByAggregateInputObjectSchema } from './providersMaxOrderByAggregateInput.schema';
import { providersMinOrderByAggregateInputObjectSchema } from './providersMinOrderByAggregateInput.schema';
import { providersSumOrderByAggregateInputObjectSchema } from './providersSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    total_regex: z.lazy(() => SortOrderSchema).optional(),
    date_regex: z.lazy(() => SortOrderSchema).optional(),
    notes_regex: z.lazy(() => SortOrderSchema).optional(),
    amount_regex: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    body_regex: z.lazy(() => SortOrderSchema).optional(),
    specializationId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => providersCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => providersAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => providersMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => providersMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => providersSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const providersOrderByWithAggregationInputObjectSchema = Schema;
