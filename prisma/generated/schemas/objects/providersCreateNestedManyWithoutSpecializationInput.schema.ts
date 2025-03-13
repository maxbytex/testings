import { z } from 'zod';
import { providersCreateWithoutSpecializationInputObjectSchema } from './providersCreateWithoutSpecializationInput.schema';
import { providersUncheckedCreateWithoutSpecializationInputObjectSchema } from './providersUncheckedCreateWithoutSpecializationInput.schema';
import { providersCreateOrConnectWithoutSpecializationInputObjectSchema } from './providersCreateOrConnectWithoutSpecializationInput.schema';
import { providersCreateManySpecializationInputEnvelopeObjectSchema } from './providersCreateManySpecializationInputEnvelope.schema';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateNestedManyWithoutSpecializationInput> =
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
      createMany: z
        .lazy(() => providersCreateManySpecializationInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => providersWhereUniqueInputObjectSchema),
          z.lazy(() => providersWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const providersCreateNestedManyWithoutSpecializationInputObjectSchema =
  Schema;
