import { z } from 'zod';
import { providersWhereUniqueInputObjectSchema } from './objects/providersWhereUniqueInput.schema';
import { providersCreateInputObjectSchema } from './objects/providersCreateInput.schema';
import { providersUncheckedCreateInputObjectSchema } from './objects/providersUncheckedCreateInput.schema';
import { providersUpdateInputObjectSchema } from './objects/providersUpdateInput.schema';
import { providersUncheckedUpdateInputObjectSchema } from './objects/providersUncheckedUpdateInput.schema';

export const providersUpsertSchema = z.object({
  where: providersWhereUniqueInputObjectSchema,
  create: z.union([
    providersCreateInputObjectSchema,
    providersUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    providersUpdateInputObjectSchema,
    providersUncheckedUpdateInputObjectSchema,
  ]),
});
