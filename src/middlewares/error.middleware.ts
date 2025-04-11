import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../utils/error";

export const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error occured", err.stack);

  if (err instanceof ResponseError) {
    res.status(err.code).json({
      success: false,
      message: err.message,
    });
  }

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
