import { Request, Response } from "express";
import { GetJsonUseCase } from "./GetJsonUseCase";

interface IQuery {
  date?: string;
}

class GetJsonController {
  constructor(private getJsonUseCase: GetJsonUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { filename } = request.params;
    const { date } = request.query as IQuery;

    try {
      const data = await this.getJsonUseCase.execute({ filename, date });
      return response.status(200).json(data);
    } catch (err) {
      return response.status(400).send(err);
    }
  }
}

export { GetJsonController };
