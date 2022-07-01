import { Router } from "express";

import { jsonRoutes } from "./json.routes";

const routes = Router();

routes.use("/json", jsonRoutes);

export { routes };
