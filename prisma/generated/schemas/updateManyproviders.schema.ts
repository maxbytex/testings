import { z } from 'zod';
import { providersUpdateManyMutationInputObjectSchema } from './objects/providersUpdateManyMutationInput.schema';
import { providersWhereInputObjectSchema } from './objects/providersWhereInput.schema';

export const providersUpdateManySchema = z.object({
  data: providersUpdateManyMutationInputObjectSchema,
  where: providersWhereInputObjectSchema.optional(),
});
