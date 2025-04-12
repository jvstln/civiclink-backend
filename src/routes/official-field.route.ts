import { Router } from "express";
import * as officialFieldController from "../controllers/official-field.controller";

export const officialFieldRouter = Router();

officialFieldRouter.get("/levels", officialFieldController.getLevels);
officialFieldRouter.get("/states", officialFieldController.getStates);
officialFieldRouter.get("/positions", officialFieldController.getPositions);
officialFieldRouter.get(
  "/jurisdictions",
  officialFieldController.getJurisdictions
);
