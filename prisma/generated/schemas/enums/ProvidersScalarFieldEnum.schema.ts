import { z } from 'zod';

export const ProvidersScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'name',
  'total_regex',
  'date_regex',
  'notes_regex',
  'amount_regex',
  'email',
  'body_regex',
  'specializationId',
]);
