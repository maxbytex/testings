import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ProvidersListRelationFilterObjectSchema } from './ProvidersListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => specializationWhereInputObjectSchema),
        z.lazy(() => specializationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => specializationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => specializationWhereInputObjectSchema),
        z.lazy(() => specializationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    providers: z.lazy(() => ProvidersListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const specializationWhereInputObjectSchema = Schema;
