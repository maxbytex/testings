import exp from "constants";
import { ServiceResponse } from "src/common/models/serviceResponse";
import { Provider } from "./providerModel";
import { ProviderRepository } from "./providerRepository";

export class ProviderService {
  private providerRepository: ProviderRepository;

  constructor(repository: ProviderRepository = new ProviderRepository()) {
    this.providerRepository = repository;
  }

  async createProvider(
    name: string
  ): Promise<ServiceResponse<Provider | null>> {
    try {
      const provider = await this.providerRepository.createProvider(name);
      return ServiceResponse.success<Provider>("Provider created", provider);
    } catch (ex) {
      return ServiceResponse.failure(
        "An error occurred while creating provider.",
        null
      );
    }
  }

  async getAllProviders(): Promise<ServiceResponse<Provider[] | null>> {
    try {
      const providers = await this.providerRepository.getAllProviders();
      return ServiceResponse.success<Provider[]>(
        "Providers fetched",
        providers
      );
    } catch (ex) {
      return ServiceResponse.failure(
        "An error occurred while fetching providers.",
        null
      );
    }
  }
}

export const providerService = new ProviderService();
