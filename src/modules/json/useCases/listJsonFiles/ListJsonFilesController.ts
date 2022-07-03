import { Request, Response } from "express";
import { ListJsonFilesUseCase } from "./ListJsonFilesUseCase";

interface IQuery {
  date?: string;
}

class ListJsonFilesController {
  constructor(private listJsonFilesUseCase: ListJsonFilesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.query as IQuery;

    try {
      const jsons = await this.listJsonFilesUseCase.execute({ date });
      return response.status(200).json(jsons);
    } catch (err) {
      return response.status(400).send(err);
    }
  }
}

export { ListJsonFilesController };
