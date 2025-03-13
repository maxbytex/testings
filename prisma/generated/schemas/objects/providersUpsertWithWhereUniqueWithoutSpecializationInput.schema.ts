import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersUpdateWithoutSpecializationInputObjectSchema } from './providersUpdateWithoutSpecializationInput.schema';
import { providersUncheckedUpdateWithoutSpecializationInputObjectSchema } from './providersUncheckedUpdateWithoutSpecializationInput.schema';
import { providersCreateWithoutSpecializationInputObjectSchema } from './providersCreateWithoutSpecializationInput.schema';
import { providersUncheckedCreateWithoutSpecializationInputObjectSchema } from './providersUncheckedCreateWithoutSpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUpsertWithWhereUniqueWithoutSpecializationInput> =
  z
    .object({
      where: z.lazy(() => providersWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => providersUpdateWithoutSpecializationInputObjectSchema),
        z.lazy(
          () => providersUncheckedUpdateWithoutSpecializationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => providersCreateWithoutSpecializationInputObjectSchema),
        z.lazy(
          () => providersUncheckedCreateWithoutSpecializationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const providersUpsertWithWhereUniqueWithoutSpecializationInputObjectSchema =
  Schema;
