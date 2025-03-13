import { z } from 'zod';

export const SpecializationScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
]);
