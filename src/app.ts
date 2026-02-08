import express, { Application, Request, Response } from "express";
import { prisma } from "./app/lib/prisma";
import { IndexRoutes } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import AppError from "./app/errorHelpers/AppError";
import status from "http-status";


const app: Application = express();

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

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
