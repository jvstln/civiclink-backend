import { Router } from "express";
import * as officialController from "../controllers/official.controller";

export const officialRouter = Router();

officialRouter.get("/", officialController.getAllOfficials);
