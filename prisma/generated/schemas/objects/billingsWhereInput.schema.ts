import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { ProvidersRelationFilterObjectSchema } from './ProvidersRelationFilter.schema';
import { providersWhereInputObjectSchema } from './providersWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => billingsWhereInputObjectSchema),
        z.lazy(() => billingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => billingsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => billingsWhereInputObjectSchema),
        z.lazy(() => billingsWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    total: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    providerId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    source: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    provider: z
      .union([
        z.lazy(() => ProvidersRelationFilterObjectSchema),
        z.lazy(() => providersWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const billingsWhereInputObjectSchema = Schema;
