import { Request, Response } from "express";
import * as officialService from "../services/official.service";
import { ResponseError } from "../utils/error";

export const getAllOfficials = async (_req: Request, res: Response) => {
  const officials = await officialService.getOfficials();

  res.json({
    success: true,
    messages: " officials retrieved successfully",
    data: officials,
  });
};

export const getOfficialById = async (req: Request, res: Response) => {
  const { officialId } = req.params;
  const official = await officialService.getOfficialById(officialId);

  if (!official) {
    throw new ResponseError(404, "Official not found");
  }

  res.json({
    success: true,
    messages: "official retrieved successfully",
    data: official,
  });
};
