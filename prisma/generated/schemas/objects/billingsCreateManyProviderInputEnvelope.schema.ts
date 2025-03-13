import { z } from 'zod';
import { billingsCreateManyProviderInputObjectSchema } from './billingsCreateManyProviderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.billingsCreateManyProviderInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => billingsCreateManyProviderInputObjectSchema),
      z.lazy(() => billingsCreateManyProviderInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const billingsCreateManyProviderInputEnvelopeObjectSchema = Schema;
