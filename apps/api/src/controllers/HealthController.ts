import { STATUS } from "@repo/utils/types/status";
import type { Request, Response } from "express";
import HealthService from "../services/HealthService";

class HealthController {
  private healthService: HealthService;

  constructor(healthService: HealthService) {
    this.healthService = healthService;
  }

  public async healthCheck(_req: Request, res: Response) {
    try {
      const status: Record<string, STATUS> = {
        server: STATUS.OK,
        database: STATUS.OK,
      };

      const dbStatus = await this.healthService.getDbHealth();

      status.database = dbStatus.status;

      if (Object.values(status).some((value) => value !== STATUS.OK)) {
        return res.status(500).json({ status });
      }

      res.status(200).json({ status });
    } catch (error) {
      res
        .status(500)
        .json({ status: { server: STATUS.ERROR, database: STATUS.ERROR } });
    }
  }
}

export default HealthController;
