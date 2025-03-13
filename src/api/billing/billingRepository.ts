import { PrismaClient } from "@prisma/client";
import { Billing } from "./billingModel";

export class BillingRepository {
  public async createBilling(billing: Billing) {
    const prisma = new PrismaClient();

    const newBilling = await prisma.billings.create({
      data: billing,
    });
    return newBilling;
  }

  public async createBillings(billings: Billing[]) {
    const prisma = new PrismaClient();
    const result = await prisma.billings
      .createMany({
        data: billings,
      })
      .then((result) => {
        return result.count;
      });

    return result;
  }
}
