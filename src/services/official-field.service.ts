import { officialModel } from "../models/official.model";

export const getLevels = async () => {
  const levels = officialModel.find().distinct("level");
  return levels;
};

export const getStates = async () => {
  const states = officialModel.find().distinct("state");
  return states;
};

export const getPositions = async () => {
  const positions = officialModel.find().distinct("position");
  return positions;
};

export const getJurisdictions = async () => {
  const jurisdictions = officialModel.find().distinct("jurisdiction");
  return jurisdictions;
};
