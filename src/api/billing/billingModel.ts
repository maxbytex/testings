import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { solar } from "googleapis/build/src/apis/solar";
import { z } from "zod";

extendZodWithOpenApi(z);

export type Billing = z.infer<typeof BillingSchema>;

export const BillingSchema = z.object({
  createdAt: z.date().default(new Date()),
  name: z.string().default(""),
  total: z.number(),
  providerId: z.number(),
  source: z.string(),
});

export const GetBillingSchema = z.object({
  body: z.object({
    name: z.string().min(5).max(10),
    providerId: z.number(),
    total: z.number(),
    solar: z.string(),
  }),
});
