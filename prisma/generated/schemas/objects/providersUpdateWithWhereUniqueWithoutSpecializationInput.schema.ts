import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersUpdateWithoutSpecializationInputObjectSchema } from './providersUpdateWithoutSpecializationInput.schema';
import { providersUncheckedUpdateWithoutSpecializationInputObjectSchema } from './providersUncheckedUpdateWithoutSpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUpdateWithWhereUniqueWithoutSpecializationInput> =
  z
    .object({
      where: z.lazy(() => providersWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => providersUpdateWithoutSpecializationInputObjectSchema),
        z.lazy(
          () => providersUncheckedUpdateWithoutSpecializationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const providersUpdateWithWhereUniqueWithoutSpecializationInputObjectSchema =
  Schema;
