import { z } from 'zod';
import { providersCreateNestedOneWithoutBillingsInputObjectSchema } from './providersCreateNestedOneWithoutBillingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    name: z.string(),
    total: z.number(),
    source: z.string().optional(),
    provider: z.lazy(
      () => providersCreateNestedOneWithoutBillingsInputObjectSchema,
    ),
  })
  .strict();

export const billingsCreateInputObjectSchema = Schema;
