import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { BillingsListRelationFilterObjectSchema } from './BillingsListRelationFilter.schema';
import { SpecializationRelationFilterObjectSchema } from './SpecializationRelationFilter.schema';
import { specializationWhereInputObjectSchema } from './specializationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => providersWhereInputObjectSchema),
        z.lazy(() => providersWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => providersWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => providersWhereInputObjectSchema),
        z.lazy(() => providersWhereInputObjectSchema).array(),
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
    billings: z.lazy(() => BillingsListRelationFilterObjectSchema).optional(),
    specialization: z
      .union([
        z.lazy(() => SpecializationRelationFilterObjectSchema),
        z.lazy(() => specializationWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const providersWhereInputObjectSchema = Schema;
