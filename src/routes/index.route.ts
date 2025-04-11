import { Router } from "express";
import { getStates } from "../controllers/state.controller";
export const indexRouter = Router();

indexRouter.get("/states", getStates);
