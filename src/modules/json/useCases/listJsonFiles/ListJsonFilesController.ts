import { Request, Response } from "express";
import { ListJsonFilesUseCase } from "./ListJsonFilesUseCase";

interface IQuery {
  date?: string;
}

class ListJsonFilesController {
  constructor(private listJsonFilesUseCase: ListJsonFilesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { date } = request.query as IQuery;
    const jsons = await this.listJsonFilesUseCase.execute({ date });
    return response.json(jsons);
  }
}

export { ListJsonFilesController };
