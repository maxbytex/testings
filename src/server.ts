import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";

// import { processFileGoogle } from "./googleApi/serverGoogleApi";
import { billingRouter } from "./api/billing/billingRouter";
import { PrismaClient } from "@prisma/client";

import { openAPIRouter } from "./api-docs/openAPIRouter";
import { healthCheckRouter } from "./api/healthCheck/healthCheckRouter";
import { providerRouter } from "./api/provider/providerRouter";
import { userRouter } from "./api/user/userRouter";
import errorHandler from "./common/middleware/errorHandler";
import rateLimiter from "./common/middleware/rateLimiter";
import requestLogger from "./common/middleware/requestLogger";
import { env } from "./common/utils/envConfig";

const prisma = new PrismaClient();

const logger = pino({ name: "server start" });

const app: Express = express();

require("dotenv").config();

// Set the application to trust the reverse proxy
app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Routes
app.use("/health-check", healthCheckRouter);
app.use("/users", userRouter);
app.use("/providers", providerRouter);
app.use("/billings", billingRouter);

// Swagger UI
app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

//google api

// processFileGoogle();

export { app, logger };
