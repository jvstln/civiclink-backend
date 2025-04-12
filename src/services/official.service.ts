import { officialModel } from "../models/official.model";

export const getOfficials = async () => {
  const officials = await officialModel.find().populate("category");
  return officials;
};

export const getOfficialById = async (id: string) => {
  const official = await officialModel.findById(id).populate("category");
  return official;
};
