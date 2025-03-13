import { z } from 'zod';
import { providersCreateManySpecializationInputObjectSchema } from './providersCreateManySpecializationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.providersCreateManySpecializationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => providersCreateManySpecializationInputObjectSchema),
        z
          .lazy(() => providersCreateManySpecializationInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const providersCreateManySpecializationInputEnvelopeObjectSchema =
  Schema;
