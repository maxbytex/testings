import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './objects/providersWhereUniqueInput.schema';

export const providersDeleteOneSchema = z.object({
  where: providersWhereUniqueInputObjectSchema,
});
