import { z } from 'zod';
import { providersCreateWithoutSpecializationInputObjectSchema } from './providersCreateWithoutSpecializationInput.schema';
import { providersUncheckedCreateWithoutSpecializationInputObjectSchema } from './providersUncheckedCreateWithoutSpecializationInput.schema';
import { providersCreateOrConnectWithoutSpecializationInputObjectSchema } from './providersCreateOrConnectWithoutSpecializationInput.schema';
import { providersUpsertWithWhereUniqueWithoutSpecializationInputObjectSchema } from './providersUpsertWithWhereUniqueWithoutSpecializationInput.schema';
import { providersCreateManySpecializationInputEnvelopeObjectSchema } from './providersCreateManySpecializationInputEnvelope.schema';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersUpdateWithWhereUniqueWithoutSpecializationInputObjectSchema } from './providersUpdateWithWhereUniqueWithoutSpecializationInput.schema';
import { providersUpdateManyWithWhereWithoutSpecializationInputObjectSchema } from './providersUpdateManyWithWhereWithoutSpecializationInput.schema';
import { providersScalarWhereInputObjectSchema } from './providersScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUncheckedUpdateManyWithoutSpecializationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => providersCreateWithoutSpecializationInputObjectSchema),
          z
            .lazy(() => providersCreateWithoutSpecializationInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              providersUncheckedCreateWithoutSpecializationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                providersUncheckedCreateWithoutSpecializationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              providersCreateOrConnectWithoutSpecializationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                providersCreateOrConnectWithoutSpecializationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              providersUpsertWithWhereUniqueWithoutSpecializationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                providersUpsertWithWhereUniqueWithoutSpecializationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => providersCreateManySpecializationInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => providersWhereUniqueInputObjectSchema),
          z.lazy(() => providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => providersWhereUniqueInputObjectSchema),
          z.lazy(() => providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => providersWhereUniqueInputObjectSchema),
          z.lazy(() => providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => providersWhereUniqueInputObjectSchema),
          z.lazy(() => providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              providersUpdateWithWhereUniqueWithoutSpecializationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                providersUpdateWithWhereUniqueWithoutSpecializationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              providersUpdateManyWithWhereWithoutSpecializationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                providersUpdateManyWithWhereWithoutSpecializationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => providersScalarWhereInputObjectSchema),
          z.lazy(() => providersScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const providersUncheckedUpdateManyWithoutSpecializationNestedInputObjectSchema =
  Schema;
