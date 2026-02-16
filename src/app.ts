import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./app/lib/auth";
import path from "path";
import { envVars } from "./config/env";
import cors from "cors";
import qs from "qs";
import { PaymentController } from "./app/lib/module/payment/payment.controller";


const app: Application = express();

app.set("query parser", (str: string) => qs.parse(str));

app.set("view engine", "ejs");
app.set("views", path.resolve(process.cwd(), `src/app/templates`))

app.post("/webhook", express.raw({ type: "application/json" }), PaymentController.handleStripeWebhookEvent)

app.use(cors({
  origin: [envVars.FRONTEND_URL, envVars.BETTER_AUTH_URL, "http://localhost:3000", "http://localhost:5000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/api/auth", toNodeHandler(auth));
// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", IndexRoutes);

app.use(globalErrorHandler);
app.use(notFound);

// Basic route
app.get('/', async (req: Request, res: Response) => {
  // throw new AppError(status.BAD_REQUEST, "Just Testing Error Handler");
  const specialty = await prisma.specialty.create({
    data: {
      title: 'Cardiology'
    }
  })

  res.status(201).json({
    success: true,
    message: 'API is working',
    data: specialty
  })
});

export default app;
