import { z } from 'zod';
import { providersScalarWhereInputObjectSchema } from './providersScalarWhereInput.schema';
import { providersUpdateManyMutationInputObjectSchema } from './providersUpdateManyMutationInput.schema';
import { providersUncheckedUpdateManyWithoutProvidersInputObjectSchema } from './providersUncheckedUpdateManyWithoutProvidersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUpdateManyWithWhereWithoutSpecializationInput> =
  z
    .object({
      where: z.lazy(() => providersScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => providersUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => providersUncheckedUpdateManyWithoutProvidersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const providersUpdateManyWithWhereWithoutSpecializationInputObjectSchema =
  Schema;
