import { z } from 'zod';
import { specializationWhereUniqueInputObjectSchema } from './specializationWhereUniqueInput.schema';
import { specializationCreateWithoutProvidersInputObjectSchema } from './specializationCreateWithoutProvidersInput.schema';
import { specializationUncheckedCreateWithoutProvidersInputObjectSchema } from './specializationUncheckedCreateWithoutProvidersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationCreateOrConnectWithoutProvidersInput> =
  z
    .object({
      where: z.lazy(() => specializationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => specializationCreateWithoutProvidersInputObjectSchema),
        z.lazy(
          () => specializationUncheckedCreateWithoutProvidersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const specializationCreateOrConnectWithoutProvidersInputObjectSchema =
  Schema;
