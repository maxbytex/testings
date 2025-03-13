import { BillingRepository } from "./billingRepository";
import { Billing } from "./billingModel";
import { ServiceResponse } from "src/common/models/serviceResponse";

export class BillingService {
  private BillingRepository: BillingRepository;

  constructor(repository: BillingRepository = new BillingRepository()) {
    this.BillingRepository = repository;
  }

  async createBilling(
    newBilling: Billing
  ): Promise<ServiceResponse<Billing | null>> {
    try {
      const billing = await this.BillingRepository.createBilling(newBilling);
      return ServiceResponse.success<Billing>("Billing created", billing);
    } catch (ex) {
      return ServiceResponse.failure(
        "An error occurred while creating billing.",
        null
      );
    }
  }

  async createBillings(
    newBillings: Billing[]
  ): Promise<ServiceResponse<Number | null>> {
    try {
      const billings: number = await this.BillingRepository.createBillings(
        newBillings
      );
      return ServiceResponse.success<Number>("Billings created", billings);
    } catch (ex) {
      return ServiceResponse.failure(
        "An error occurred while creating billing.",
        null
      );
    }
  }
}

export const billingService = new BillingService();
