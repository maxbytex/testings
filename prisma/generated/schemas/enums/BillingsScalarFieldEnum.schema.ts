import { z } from 'zod';

export const BillingsScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
  'total',
  'providerId',
  'source',
]);
