import { Request, Response, RequestHandler } from "express";
import { handleServiceResponse } from "src/common/utils/httpHandlers";
import { providerService } from "./providerSevice";

class ProviderController {
  public createProvider: RequestHandler = async (
    req: Request,
    res: Response
  ) => {
    const name = req.params.name as string;
    const serviceResponse = await providerService.createProvider(name);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const providerController = new ProviderController();
