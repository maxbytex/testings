import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";

import { z } from "zod";
import { billingController } from "./billingController";
import { BillingSchema } from "./billingModel";
import { createApiResponse } from "src/api-docs/openAPIResponseBuilders";

export const billingRegistry = new OpenAPIRegistry();
export const billingRouter: Router = express.Router();

billingRegistry.register("Billing", BillingSchema);

billingRegistry.registerPath({
  method: "get",
  path: "/billings",
  tags: ["Billing"],

  responses: createApiResponse(z.array(BillingSchema), "Success"),
});

billingRouter.get("/dino", billingController.test);
