import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    const now = new Date();
    var day = now.getDate().toString();
    var month = (now.getMonth() + 1).toString();
    const year = now.getFullYear();

    if (parseInt(day) < 10) {
      day = `0${day}`;
    }

    if (parseInt(month) < 10) {
      month = `0${month}`;
    }
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (req, file, callback) => {
          const fileHash = `${day}${month}${year}`;
          const fileName = `${fileHash}-${file.originalname}`;

          callback(null, fileName);
        },
      }),
    };
  },
};
