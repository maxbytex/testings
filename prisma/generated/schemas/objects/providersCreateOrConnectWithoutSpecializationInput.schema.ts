import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersCreateWithoutSpecializationInputObjectSchema } from './providersCreateWithoutSpecializationInput.schema';
import { providersUncheckedCreateWithoutSpecializationInputObjectSchema } from './providersUncheckedCreateWithoutSpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateOrConnectWithoutSpecializationInput> =
  z
    .object({
      where: z.lazy(() => providersWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => providersCreateWithoutSpecializationInputObjectSchema),
        z.lazy(
          () => providersUncheckedCreateWithoutSpecializationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const providersCreateOrConnectWithoutSpecializationInputObjectSchema =
  Schema;
