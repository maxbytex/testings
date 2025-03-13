import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './objects/providersWhereUniqueInput.schema';

export const providersFindUniqueSchema = z.object({
  where: providersWhereUniqueInputObjectSchema,
});
