import { Router } from "express";
import multer from "multer";

import { getJsonController } from "../modules/json/useCases/getJson";
import { listJsonFilesController } from "../modules/json/useCases/listJsonFiles";

import uploadConfig from "../config/upload";

const jsonRoutes = Router();

const uploadJson = multer(uploadConfig.upload("./uploads/jsons"));

jsonRoutes.get("/:filename", (request, response) => {
  getJsonController.handle(request, response);
});

jsonRoutes.get("/", (request, response) => {
  listJsonFilesController.handle(request, response);
});

jsonRoutes.post("/", uploadJson.single("file"), (req, res) => {
  res.status(200).json({ message: "Uploaded" });
});

export { jsonRoutes };
