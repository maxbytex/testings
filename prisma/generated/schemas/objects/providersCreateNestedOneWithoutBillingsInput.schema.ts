import { z } from 'zod';
import { providersCreateWithoutBillingsInputObjectSchema } from './providersCreateWithoutBillingsInput.schema';
import { providersUncheckedCreateWithoutBillingsInputObjectSchema } from './providersUncheckedCreateWithoutBillingsInput.schema';
import { providersCreateOrConnectWithoutBillingsInputObjectSchema } from './providersCreateOrConnectWithoutBillingsInput.schema';
import { providersWhereUniqueInputObjectSchema } from './providersWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateNestedOneWithoutBillingsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => providersCreateWithoutBillingsInputObjectSchema),
        z.lazy(() => providersUncheckedCreateWithoutBillingsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => providersCreateOrConnectWithoutBillingsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => providersWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const providersCreateNestedOneWithoutBillingsInputObjectSchema = Schema;
