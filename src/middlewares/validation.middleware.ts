import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../utils/error";

export const createIdValidationMiddleware = (paramName: string) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const id = req.params[paramName];

    if (!id) {
      throw new ResponseError(400, `${paramName} is required`);
    }

    if (id.length !== 24) {
      throw new ResponseError(400, `${paramName} is invalid`);
    }

    next();
  };
};
