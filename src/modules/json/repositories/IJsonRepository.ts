interface IJsonRepository {
  listJsons(date?: string): Promise<string[]>;
  read(file: string): Promise<object[]>;
}

export { IJsonRepository };
