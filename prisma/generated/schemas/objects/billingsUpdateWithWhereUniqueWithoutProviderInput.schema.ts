import { z } from 'zod';
import { billingsWhereUniqueInputObjectSchema } from './billingsWhereUniqueInput.schema';
import { billingsUpdateWithoutProviderInputObjectSchema } from './billingsUpdateWithoutProviderInput.schema';
import { billingsUncheckedUpdateWithoutProviderInputObjectSchema } from './billingsUncheckedUpdateWithoutProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUpdateWithWhereUniqueWithoutProviderInput> =
  z
    .object({
      where: z.lazy(() => billingsWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => billingsUpdateWithoutProviderInputObjectSchema),
        z.lazy(() => billingsUncheckedUpdateWithoutProviderInputObjectSchema),
      ]),
    })
    .strict();

export const billingsUpdateWithWhereUniqueWithoutProviderInputObjectSchema =
  Schema;
