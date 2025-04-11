import { officialModel } from "../models/official.model";

export const getOfficials = async () => {
  const officials = await officialModel.find();
  return officials;
};
