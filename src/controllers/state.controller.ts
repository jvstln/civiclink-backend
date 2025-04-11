import { Request, Response } from "express";
import { stateService } from "../services/state.service";

export const getStates = async (_req: Request, res: Response) => {
  const states = await stateService.getStates();
  res.json({
    success: true,
    message: "States and sub regions retrieved successfully",
    data: states,
  });
};
