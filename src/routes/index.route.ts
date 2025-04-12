import { Router } from "express";
import * as stateController from "../controllers/state.controller";
import { officialRouter } from "./official.route";
import { categoryRouter } from "./category.route";
import { officialFieldRouter } from "./official-field.route";

export const indexRouter = Router();

indexRouter.use("/officials", officialRouter);
indexRouter.use("/categories", categoryRouter);

indexRouter.get("/states", stateController.getStates);

indexRouter.use("/official-fields", officialFieldRouter);
