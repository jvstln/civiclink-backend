import { Request, Response } from "express";
import StateService from "../services/state.service";

export const getStates = async (_req: Request, res: Response) => {
  const states = await StateService.getStates();
  res.json({
    success: true,
    message: "States and sub regions retrieved successfully",
    data: states,
  });
};
