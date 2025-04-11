import { Request, Response } from "express";
import { stateService } from "../services/state.service";

class StateController {
  async getStates(_req: Request, res: Response) {
    const states = await stateService.getStates();
    res.json({
      success: true,
      message: "States and sub regions retrieved successfully",
      data: states,
    });
  }
}

export const stateController = new StateController();
