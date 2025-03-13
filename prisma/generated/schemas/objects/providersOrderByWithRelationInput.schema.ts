import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { billingsOrderByRelationAggregateInputObjectSchema } from './billingsOrderByRelationAggregateInput.schema';
import { specializationOrderByWithRelationInputObjectSchema } from './specializationOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersOrderByWithRelationInput> = z
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
    billings: z
      .lazy(() => billingsOrderByRelationAggregateInputObjectSchema)
      .optional(),
    specialization: z
      .lazy(() => specializationOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const providersOrderByWithRelationInputObjectSchema = Schema;
