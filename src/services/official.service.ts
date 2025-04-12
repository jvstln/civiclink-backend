import { officialModel } from "../models/official.model";
import { Official } from "../types/official.type";

export const getOfficials = async (filters: Partial<Official> = {}) => {
  const officials = await officialModel.find(filters).populate("category");
  return officials;
};

export const getOfficialById = async (id: string) => {
  const official = await officialModel.findById(id).populate("category");
  return official;
};
