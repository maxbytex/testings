import { z } from 'zod';
import { providersCreateManyInputObjectSchema } from './objects/providersCreateManyInput.schema';

export const providersCreateManySchema = z.object({
  data: z.union([
    providersCreateManyInputObjectSchema,
    z.array(providersCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
