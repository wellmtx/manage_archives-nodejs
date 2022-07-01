import { JsonRepository } from "../../repositories/implementations/JsonRepository";
import { ListJsonFilesUseCase } from "./ListJsonFilesUseCase";
import { ListJsonFilesController } from "./ListJsonFilesController";

const jsonRepository = new JsonRepository();
const listJsonFilesUseCase = new ListJsonFilesUseCase(jsonRepository);
const listJsonFilesController = new ListJsonFilesController(
  listJsonFilesUseCase
);

export { listJsonFilesController };
