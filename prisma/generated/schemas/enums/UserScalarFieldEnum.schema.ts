import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'createdAt', 'name']);
