import { IJsonRepository } from "../../repositories/IJsonRepository";

interface IRequest {
  date?: string;
  filename: string;
}

class GetJsonUseCase {
  constructor(private JsonRepository: IJsonRepository) {}

  async execute({ filename, date }: IRequest): Promise<object[]> {
    const files = await this.JsonRepository.listJsons(date);

    const file = files.find((file) => {
      let file_name = file.split("-")[1].split(".")[0];
      if (file_name === filename) {
        return file;
      }
    });

    if (!file) {
      throw new Error("File not found");
    }

    const data = await this.JsonRepository.read(file);
    return data;
  }
}

export { GetJsonUseCase };
