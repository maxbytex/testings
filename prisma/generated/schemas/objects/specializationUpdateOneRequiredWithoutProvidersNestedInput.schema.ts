import { z } from 'zod';
import { specializationCreateWithoutProvidersInputObjectSchema } from './specializationCreateWithoutProvidersInput.schema';
import { specializationUncheckedCreateWithoutProvidersInputObjectSchema } from './specializationUncheckedCreateWithoutProvidersInput.schema';
import { specializationCreateOrConnectWithoutProvidersInputObjectSchema } from './specializationCreateOrConnectWithoutProvidersInput.schema';
import { specializationUpsertWithoutProvidersInputObjectSchema } from './specializationUpsertWithoutProvidersInput.schema';
import { specializationWhereUniqueInputObjectSchema } from './specializationWhereUniqueInput.schema';
import { specializationUpdateWithoutProvidersInputObjectSchema } from './specializationUpdateWithoutProvidersInput.schema';
import { specializationUncheckedUpdateWithoutProvidersInputObjectSchema } from './specializationUncheckedUpdateWithoutProvidersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationUpdateOneRequiredWithoutProvidersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => specializationCreateWithoutProvidersInputObjectSchema),
          z.lazy(
            () =>
              specializationUncheckedCreateWithoutProvidersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => specializationCreateOrConnectWithoutProvidersInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => specializationUpsertWithoutProvidersInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => specializationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => specializationUpdateWithoutProvidersInputObjectSchema),
          z.lazy(
            () =>
              specializationUncheckedUpdateWithoutProvidersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const specializationUpdateOneRequiredWithoutProvidersNestedInputObjectSchema =
  Schema;
