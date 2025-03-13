import { z } from 'zod';
import { specializationUpdateWithoutProvidersInputObjectSchema } from './specializationUpdateWithoutProvidersInput.schema';
import { specializationUncheckedUpdateWithoutProvidersInputObjectSchema } from './specializationUncheckedUpdateWithoutProvidersInput.schema';
import { specializationCreateWithoutProvidersInputObjectSchema } from './specializationCreateWithoutProvidersInput.schema';
import { specializationUncheckedCreateWithoutProvidersInputObjectSchema } from './specializationUncheckedCreateWithoutProvidersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.specializationUpsertWithoutProvidersInput> = z
  .object({
    update: z.union([
      z.lazy(() => specializationUpdateWithoutProvidersInputObjectSchema),
      z.lazy(
        () => specializationUncheckedUpdateWithoutProvidersInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => specializationCreateWithoutProvidersInputObjectSchema),
      z.lazy(
        () => specializationUncheckedCreateWithoutProvidersInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const specializationUpsertWithoutProvidersInputObjectSchema = Schema;
