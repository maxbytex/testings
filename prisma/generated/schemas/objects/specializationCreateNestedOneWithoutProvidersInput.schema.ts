import { z } from 'zod';
import { specializationCreateWithoutProvidersInputObjectSchema } from './specializationCreateWithoutProvidersInput.schema';
import { specializationUncheckedCreateWithoutProvidersInputObjectSchema } from './specializationUncheckedCreateWithoutProvidersInput.schema';
import { specializationCreateOrConnectWithoutProvidersInputObjectSchema } from './specializationCreateOrConnectWithoutProvidersInput.schema';
import { specializationWhereUniqueInputObjectSchema } from './specializationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationCreateNestedOneWithoutProvidersInput> =
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
      connect: z
        .lazy(() => specializationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const specializationCreateNestedOneWithoutProvidersInputObjectSchema =
  Schema;
