import { type PrismaClient } from "@repo/database";
import { STATUS } from "@repo/utils/types/status";

class HealthService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async getDbHealth(): Promise<{ status: STATUS }> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { status: STATUS.OK };
    } catch (error) {
      return { status: STATUS.ERROR };
    }
  }
}

export default HealthService;
