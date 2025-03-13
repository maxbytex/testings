import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';
import { providersCreateWithoutBillingsInputObjectSchema } from './providersCreateWithoutBillingsInput.schema';
import { providersUncheckedCreateWithoutBillingsInputObjectSchema } from './providersUncheckedCreateWithoutBillingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateOrConnectWithoutBillingsInput> = z
  .object({
    where: z.lazy(() => providersWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => providersCreateWithoutBillingsInputObjectSchema),
      z.lazy(() => providersUncheckedCreateWithoutBillingsInputObjectSchema),
    ]),
  })
  .strict();

export const providersCreateOrConnectWithoutBillingsInputObjectSchema = Schema;
