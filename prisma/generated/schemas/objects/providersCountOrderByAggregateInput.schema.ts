import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCountOrderByAggregateInput> = z
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
  })
  .strict();

export const providersCountOrderByAggregateInputObjectSchema = Schema;
