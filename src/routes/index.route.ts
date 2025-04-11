import { Router } from "express";
import * as stateController from "../controllers/state.controller";
import { officialRouter } from "./official.route";
export const indexRouter = Router();

indexRouter.use("/officials", officialRouter);

indexRouter.get("/states", stateController.getStates);
