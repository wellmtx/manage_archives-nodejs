import { Request, Response } from "express";
import { GetJsonUseCase } from "./GetJsonUseCase";

class GetJsonController {
  constructor(private getJsonUseCase: GetJsonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { filename } = request.params;

    try {
      const data = await this.getJsonUseCase.execute({ filename });
      return response.status(200).json(data);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { GetJsonController };
