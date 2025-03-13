import { z } from 'zod';
import { providersOrderByWithRelationInputObjectSchema } from './objects/providersOrderByWithRelationInput.schema';
import { providersWhereInputObjectSchema } from './objects/providersWhereInput.schema';
import { providersWhereUniqueInputObjectSchema } from './objects/providersWhereUniqueInput.schema';
import { providersScalarFieldEnumSchema } from './enums/providersScalarFieldEnum.schema';

export const providersFindFirstSchema = z.object({
  orderBy: z
    .union([
      providersOrderByWithRelationInputObjectSchema,
      providersOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: providersWhereInputObjectSchema.optional(),
  cursor: providersWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(providersScalarFieldEnumSchema).optional(),
});
