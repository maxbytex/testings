import { z } from 'zod';
import { providersUpdateWithoutBillingsInputObjectSchema } from './providersUpdateWithoutBillingsInput.schema';
import { providersUncheckedUpdateWithoutBillingsInputObjectSchema } from './providersUncheckedUpdateWithoutBillingsInput.schema';
import { providersCreateWithoutBillingsInputObjectSchema } from './providersCreateWithoutBillingsInput.schema';
import { providersUncheckedCreateWithoutBillingsInputObjectSchema } from './providersUncheckedCreateWithoutBillingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersUpsertWithoutBillingsInput> = z
  .object({
    update: z.union([
      z.lazy(() => providersUpdateWithoutBillingsInputObjectSchema),
      z.lazy(() => providersUncheckedUpdateWithoutBillingsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => providersCreateWithoutBillingsInputObjectSchema),
      z.lazy(() => providersUncheckedCreateWithoutBillingsInputObjectSchema),
    ]),
  })
  .strict();

export const providersUpsertWithoutBillingsInputObjectSchema = Schema;
