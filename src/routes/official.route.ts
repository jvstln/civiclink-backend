import { Router } from "express";
import * as officialController from "../controllers/official.controller";
import { createIdValidationMiddleware } from "../middlewares/validation.middleware";

export const officialRouter = Router();

officialRouter.param("officialId", createIdValidationMiddleware("officialId"));

// Supported queries: category, level, state, position, jurisdiction, name, search
officialRouter.get("/", officialController.getAllOfficials);
officialRouter.get("/:officialId", officialController.getOfficialById);
