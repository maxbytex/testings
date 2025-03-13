import { z } from 'zod';
import { providersCreateInputObjectSchema } from './objects/providersCreateInput.schema';
import { providersUncheckedCreateInputObjectSchema } from './objects/providersUncheckedCreateInput.schema';

export const providersCreateOneSchema = z.object({
  data: z.union([
    providersCreateInputObjectSchema,
    providersUncheckedCreateInputObjectSchema,
  ]),
});
