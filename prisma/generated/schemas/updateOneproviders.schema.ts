import { z } from 'zod';
import { providersUpdateInputObjectSchema } from './objects/providersUpdateInput.schema';
import { providersUncheckedUpdateInputObjectSchema } from './objects/providersUncheckedUpdateInput.schema';
import { providersWhereUniqueInputObjectSchema } from './objects/providersWhereUniqueInput.schema';

export const providersUpdateOneSchema = z.object({
  data: z.union([
    providersUpdateInputObjectSchema,
    providersUncheckedUpdateInputObjectSchema,
  ]),
  where: providersWhereUniqueInputObjectSchema,
});
