import { Request, Response, RequestHandler } from "express";

class BillingController {
  public test: RequestHandler = async (req: Request, res: Response) => {
    return res.send("DINO STAND!");
  };
}

export const billingController = new BillingController();
