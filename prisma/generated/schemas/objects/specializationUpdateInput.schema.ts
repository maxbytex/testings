import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { providersUpdateManyWithoutSpecializationNestedInputObjectSchema } from './providersUpdateManyWithoutSpecializationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationUpdateInput> = z
  .object({
    createdAt: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    providers: z
      .lazy(
        () => providersUpdateManyWithoutSpecializationNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const specializationUpdateInputObjectSchema = Schema;
