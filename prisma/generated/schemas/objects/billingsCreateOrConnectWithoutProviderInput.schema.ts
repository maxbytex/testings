import { z } from 'zod';
import { billingsWhereUniqueInputObjectSchema } from './billingsWhereUniqueInput.schema';
import { billingsCreateWithoutProviderInputObjectSchema } from './billingsCreateWithoutProviderInput.schema';
import { billingsUncheckedCreateWithoutProviderInputObjectSchema } from './billingsUncheckedCreateWithoutProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsCreateOrConnectWithoutProviderInput> = z
  .object({
    where: z.lazy(() => billingsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => billingsCreateWithoutProviderInputObjectSchema),
      z.lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema),
    ]),
  })
  .strict();

export const billingsCreateOrConnectWithoutProviderInputObjectSchema = Schema;
