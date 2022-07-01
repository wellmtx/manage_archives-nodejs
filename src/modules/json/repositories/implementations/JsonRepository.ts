import fs from "fs";
import { IJsonRepository } from "../IJsonRepository";

class JsonRepository implements IJsonRepository {
  listJsons(date?: string): Promise<string[]> {
    return new Promise((resolve) => {
      const files = fs.readdirSync("./uploads/jsons");
      if (date) {
        const list = files.filter((file) => {
          let file_date = file.split("-")[0];
          if (file_date === date) {
            return file;
          }
        });
        resolve(list);
      } else {
        resolve(files);
      }
    });
  }

  async read(file: string): Promise<object[]> {
    return new Promise((resolve) => {
      var jsonData = fs.readFileSync(`./uploads/jsons/${file}`, "utf8");
      resolve(JSON.parse(jsonData));
    });
  }
}

export { JsonRepository };
