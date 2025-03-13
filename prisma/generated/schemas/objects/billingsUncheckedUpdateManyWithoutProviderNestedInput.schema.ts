import { z } from 'zod';
import { billingsCreateWithoutProviderInputObjectSchema } from './billingsCreateWithoutProviderInput.schema';
import { billingsUncheckedCreateWithoutProviderInputObjectSchema } from './billingsUncheckedCreateWithoutProviderInput.schema';
import { billingsCreateOrConnectWithoutProviderInputObjectSchema } from './billingsCreateOrConnectWithoutProviderInput.schema';
import { billingsUpsertWithWhereUniqueWithoutProviderInputObjectSchema } from './billingsUpsertWithWhereUniqueWithoutProviderInput.schema';
import { billingsCreateManyProviderInputEnvelopeObjectSchema } from './billingsCreateManyProviderInputEnvelope.schema';
import { billingsWhereUniqueInputObjectSchema } from './billingsWhereUniqueInput.schema';
import { billingsUpdateWithWhereUniqueWithoutProviderInputObjectSchema } from './billingsUpdateWithWhereUniqueWithoutProviderInput.schema';
import { billingsUpdateManyWithWhereWithoutProviderInputObjectSchema } from './billingsUpdateManyWithWhereWithoutProviderInput.schema';
import { billingsScalarWhereInputObjectSchema } from './billingsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUncheckedUpdateManyWithoutProviderNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => billingsCreateWithoutProviderInputObjectSchema),
          z.lazy(() => billingsCreateWithoutProviderInputObjectSchema).array(),
          z.lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema),
          z
            .lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => billingsCreateOrConnectWithoutProviderInputObjectSchema),
          z
            .lazy(() => billingsCreateOrConnectWithoutProviderInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => billingsUpsertWithWhereUniqueWithoutProviderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                billingsUpsertWithWhereUniqueWithoutProviderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => billingsCreateManyProviderInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => billingsWhereUniqueInputObjectSchema),
          z.lazy(() => billingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => billingsWhereUniqueInputObjectSchema),
          z.lazy(() => billingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => billingsWhereUniqueInputObjectSchema),
          z.lazy(() => billingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => billingsWhereUniqueInputObjectSchema),
          z.lazy(() => billingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => billingsUpdateWithWhereUniqueWithoutProviderInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                billingsUpdateWithWhereUniqueWithoutProviderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => billingsUpdateManyWithWhereWithoutProviderInputObjectSchema,
          ),
          z
            .lazy(
              () => billingsUpdateManyWithWhereWithoutProviderInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => billingsScalarWhereInputObjectSchema),
          z.lazy(() => billingsScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const billingsUncheckedUpdateManyWithoutProviderNestedInputObjectSchema =
  Schema;
