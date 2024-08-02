import type { Request, Response } from "express";

class HealthController {
  public static async healthCheck(_req: Request, res: Response) {
    res.status(200).json({ status: "ok" });
  }
}

export default HealthController;
