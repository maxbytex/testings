import { PrismaClient } from "@prisma/client";

export class ProviderRepository {
  public async createProvider(providerName: string) {
    const prisma = new PrismaClient();
    const specialization = await prisma.specialization.findFirst({
      where: { name: "energy" },
    });

    if (!specialization) {
      throw new Error("Specialization not found");
    }
    const provider = await prisma.providers.create({
      data: {
        name: providerName,
        specialization: {
          connect: { id: specialization.id },
        },
      },
    });
    return provider;
  }

  public async getAllProviders() {
    const prisma = new PrismaClient();
    const providers = await prisma.providers.findMany();
    return providers;
  }
}
