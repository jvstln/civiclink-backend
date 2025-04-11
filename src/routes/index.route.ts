import { Router } from "express";
import { stateController } from "../controllers/state.controller";
export const indexRouter = Router();

indexRouter.get("/states", stateController.getStates);
