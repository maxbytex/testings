import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { email } from "envalid";
import { z } from "zod";

extendZodWithOpenApi(z);

export type Provider = z.infer<typeof ProviderSchema>;

export const ProviderSchema = z.object({
  id: z.number(),
  createdAt: z.date().default(new Date()),
  name: z.string().default(""),
  total_regex: z.string().default(""),
  date_regex: z.string().default(""),
  notes_regex: z.string().default(""),
  amount_regex: z.string().default("/[\\d,]+(?:\\.\\d{1,2})?/"),
  specializationId: z.number(),
  email: z.string(),
  body_regex: z.string(),
});

export const GetProviderSchema = z.object({
  body: z.object({
    name: z.string().min(5).max(20),
  }),
});
