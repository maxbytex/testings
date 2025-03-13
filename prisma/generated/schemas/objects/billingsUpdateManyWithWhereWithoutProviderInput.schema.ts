import { z } from 'zod';
import { billingsScalarWhereInputObjectSchema } from './billingsScalarWhereInput.schema';
import { billingsUpdateManyMutationInputObjectSchema } from './billingsUpdateManyMutationInput.schema';
import { billingsUncheckedUpdateManyWithoutBillingsInputObjectSchema } from './billingsUncheckedUpdateManyWithoutBillingsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsUpdateManyWithWhereWithoutProviderInput> =
  z
    .object({
      where: z.lazy(() => billingsScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => billingsUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => billingsUncheckedUpdateManyWithoutBillingsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const billingsUpdateManyWithWhereWithoutProviderInputObjectSchema =
  Schema;
