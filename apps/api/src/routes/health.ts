import express, { type Request, type Response, type Router } from "express";
import HealthController from "../controllers/HealthController";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) =>
  HealthController.healthCheck(req, res)
);

export default router;
