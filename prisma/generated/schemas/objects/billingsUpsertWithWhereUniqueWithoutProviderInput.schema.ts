import { z } from 'zod';
import { billingsWhereUniqueInputObjectSchema } from './billingsWhereUniqueInput.schema';
import { billingsUpdateWithoutProviderInputObjectSchema } from './billingsUpdateWithoutProviderInput.schema';
import { billingsUncheckedUpdateWithoutProviderInputObjectSchema } from './billingsUncheckedUpdateWithoutProviderInput.schema';
import { billingsCreateWithoutProviderInputObjectSchema } from './billingsCreateWithoutProviderInput.schema';
import { billingsUncheckedCreateWithoutProviderInputObjectSchema } from './billingsUncheckedCreateWithoutProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUpsertWithWhereUniqueWithoutProviderInput> =
  z
    .object({
      where: z.lazy(() => billingsWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => billingsUpdateWithoutProviderInputObjectSchema),
        z.lazy(() => billingsUncheckedUpdateWithoutProviderInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => billingsCreateWithoutProviderInputObjectSchema),
        z.lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema),
      ]),
    })
    .strict();

export const billingsUpsertWithWhereUniqueWithoutProviderInputObjectSchema =
  Schema;
