import { IJsonRepository } from "../../repositories/IJsonRepository";

interface IRequest {
  date?: string;
}

class ListJsonFilesUseCase {
  constructor(private jsonRepository: IJsonRepository) {}

  async execute({ date }: IRequest): Promise<string[]> {
    const list = await this.jsonRepository.listJsons(date);

    if (list.length === 0) {
      throw new Error("No json files found");
    }

    return list;
  }
}

export { ListJsonFilesUseCase };
