import { JsonRepository } from "../../repositories/implementations/JsonRepository";
import { GetJsonUseCase } from "./GetJsonUseCase";
import { GetJsonController } from "./GetJsonController";

const jsonRepository = new JsonRepository();
const getJsonUseCase = new GetJsonUseCase(jsonRepository);
const getJsonController = new GetJsonController(getJsonUseCase);

export { getJsonController };
