import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { providersOrderByWithRelationInputObjectSchema } from './providersOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    total: z.lazy(() => SortOrderSchema).optional(),
    providerId: z.lazy(() => SortOrderSchema).optional(),
    source: z.lazy(() => SortOrderSchema).optional(),
    provider: z
      .lazy(() => providersOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const billingsOrderByWithRelationInputObjectSchema = Schema;
