import { prisma } from "@repo/database";
import express, { type Request, type Response, type Router } from "express";
import HealthController from "../controllers/HealthController";
import HealthService from "../services/HealthService";

const router: Router = express.Router();

const healthService = new HealthService(prisma);
const healthController = new HealthController(healthService);

router.get("/", (req: Request, res: Response) =>
  healthController.healthCheck(req, res)
);

export default router;
