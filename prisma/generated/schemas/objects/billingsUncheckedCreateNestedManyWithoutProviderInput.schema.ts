import { z } from 'zod';
import { billingsCreateWithoutProviderInputObjectSchema } from './billingsCreateWithoutProviderInput.schema';
import { billingsUncheckedCreateWithoutProviderInputObjectSchema } from './billingsUncheckedCreateWithoutProviderInput.schema';
import { billingsCreateOrConnectWithoutProviderInputObjectSchema } from './billingsCreateOrConnectWithoutProviderInput.schema';
import { billingsCreateManyProviderInputEnvelopeObjectSchema } from './billingsCreateManyProviderInputEnvelope.schema';
import { billingsWhereUniqueInputObjectSchema } from './billingsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUncheckedCreateNestedManyWithoutProviderInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => billingsCreateWithoutProviderInputObjectSchema),
          z.lazy(() => billingsCreateWithoutProviderInputObjectSchema).array(),
          z.lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema),
          z
            .lazy(() => billingsUncheckedCreateWithoutProviderInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => billingsCreateOrConnectWithoutProviderInputObjectSchema),
          z
            .lazy(() => billingsCreateOrConnectWithoutProviderInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => billingsCreateManyProviderInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => billingsWhereUniqueInputObjectSchema),
          z.lazy(() => billingsWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const billingsUncheckedCreateNestedManyWithoutProviderInputObjectSchema =
  Schema;
