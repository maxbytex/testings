import express, { type Router } from "express";

import { z } from "zod";
import { providerController } from "./providerController";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "src/api-docs/openAPIResponseBuilders";
import { validateRequest } from "src/common/utils/httpHandlers";
import { ProviderSchema, GetProviderSchema } from "./providerModel";

export const providerRegistry = new OpenAPIRegistry();
export const providerRouter: Router = express.Router();

providerRegistry.register("Provider", ProviderSchema);

providerRegistry.registerPath({
  method: "post",
  path: "/providers",
  tags: ["Provider"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: GetProviderSchema.shape.body,
        },
      },
    },
  },
  responses: createApiResponse(z.array(ProviderSchema), "Success"),
});

providerRouter.post(
  "/",
  validateRequest(GetProviderSchema),
  providerController.createProvider
);
