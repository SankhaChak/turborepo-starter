import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import healthRouter from "./routes/health";

export const createServer = (): Express => {
  const server = express();

  server.use(
    cors({
      // origin: [], // Add frontend URL here
      credentials: true,
    })
  );

  server.use(cookieParser());
  server.use(express.json());

  server.use("/health", healthRouter);

  return server;
};
