import { Request, Response } from "express";
import * as officialService from "../services/official.service";
import { ResponseError } from "../utils/error";

export const getAllOfficials = async (_req: Request, res: Response) => {
  const officials = await officialService.getOfficials();

  res.status(200).json({
    success: true,
    messages: " officials retrieved successfully",
    data: officials,
  });
};
