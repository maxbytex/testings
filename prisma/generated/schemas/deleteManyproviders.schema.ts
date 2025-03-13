import { z } from 'zod';
import { providersWhereInputObjectSchema } from './objects/providersWhereInput.schema';

export const providersDeleteManySchema = z.object({
  where: providersWhereInputObjectSchema.optional(),
});
