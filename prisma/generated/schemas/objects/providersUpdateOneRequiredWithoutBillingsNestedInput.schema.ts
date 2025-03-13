import { z } from 'zod';
import { providersCreateWithoutBillingsInputObjectSchema } from './providersCreateWithoutBillingsInput.schema';
import { providersUncheckedCreateWithoutBillingsInputObjectSchema } from './providersUncheckedCreateWithoutBillingsInput.schema';
import { providersCreateOrConnectWithoutBillingsInputObjectSchema } from './providersCreateOrConnectWithoutBillingsInput.schema';
import { providersUpsertWithoutBillingsInputObjectSchema } from './providersUpsertWithoutBillingsInput.schema';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersUpdateWithoutBillingsInputObjectSchema } from './providersUpdateWithoutBillingsInput.schema';
import { providersUncheckedUpdateWithoutBillingsInputObjectSchema } from './providersUncheckedUpdateWithoutBillingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUpdateOneRequiredWithoutBillingsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => providersCreateWithoutBillingsInputObjectSchema),
          z.lazy(
            () => providersUncheckedCreateWithoutBillingsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => providersCreateOrConnectWithoutBillingsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => providersUpsertWithoutBillingsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => providersWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => providersUpdateWithoutBillingsInputObjectSchema),
          z.lazy(
            () => providersUncheckedUpdateWithoutBillingsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const providersUpdateOneRequiredWithoutBillingsNestedInputObjectSchema =
  Schema;
