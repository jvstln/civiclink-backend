import { Request, Response } from "express";
import * as officialFieldService from "../services/official-field.service";

export const getLevels = async (_req: Request, res: Response) => {
  const levels = await officialFieldService.getLevels();
  res.json({
    success: true,
    message: "Levels fetched successfully",
    data: levels,
  });
};

export const getStates = async (_req: Request, res: Response) => {
  const states = await officialFieldService.getStates();
  res.json({
    success: true,
    message: "States fetched successfully",
    data: states,
  });
};

export const getPositions = async (_req: Request, res: Response) => {
  const positions = await officialFieldService.getPositions();
  res.json({
    success: true,
    message: "Positions fetched successfully",
    data: positions,
  });
};

export const getJurisdictions = async (_req: Request, res: Response) => {
  const jurisdictions = await officialFieldService.getJurisdictions();
  res.json({
    success: true,
    message: "Jurisdictions fetched successfully",
    data: jurisdictions,
  });
};
