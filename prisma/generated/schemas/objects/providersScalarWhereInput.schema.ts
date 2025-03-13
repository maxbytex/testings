import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => providersScalarWhereInputObjectSchema),
        z.lazy(() => providersScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => providersScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => providersScalarWhereInputObjectSchema),
        z.lazy(() => providersScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    total_regex: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    date_regex: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    notes_regex: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    amount_regex: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body_regex: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    specializationId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const providersScalarWhereInputObjectSchema = Schema;
