import { Router } from "express";
import * as officialController from "../controllers/official.controller";
import { createIdValidationMiddleware } from "../middlewares/validation.middleware";

export const officialRouter = Router();

officialRouter.param("officialId", createIdValidationMiddleware("officialId"));

officialRouter.get("/", officialController.getAllOfficials);
officialRouter.get("/:officialId", officialController.getOfficialById);
