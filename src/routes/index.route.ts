import { Router } from "express";
import { stateController } from "../controllers/state.controller";
import { getAllOfficials } from "../controllers/official.controller"
export const indexRouter = Router();

indexRouter.get("/states", stateController.getStates);
indexRouter.get("/officials", getAllOfficials);
