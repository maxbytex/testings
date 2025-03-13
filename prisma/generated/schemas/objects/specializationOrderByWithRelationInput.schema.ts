import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { providersOrderByRelationAggregateInputObjectSchema } from './providersOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    providers: z
      .lazy(() => providersOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const specializationOrderByWithRelationInputObjectSchema = Schema;
