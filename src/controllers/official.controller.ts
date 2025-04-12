import { Request, Response } from "express";
import * as officialService from "../services/official.service";
import { ResponseError } from "../utils/error";
import * as categoryService from "../services/category.service";

export const getAllOfficials = async (req: Request, res: Response) => {
  const filters: Record<string, string> = {};

  const addToFilter = (key: string) => {
    if (req.query[key] && typeof req.query[key] === "string") {
      filters[key] = req.query[key].toLowerCase();
    }
  };

  addToFilter("category");
  addToFilter("level");
  addToFilter("state");
  addToFilter("position");
  addToFilter("jurisdiction");
  addToFilter("name");

  if (filters.category) {
    const category = await categoryService.getCategoryByName(filters.category);

    if (!category) {
      throw new ResponseError(404, `Category "${filters.category}" not found`);
    }
    filters.category = category._id.toString();
  }

  let officials = await officialService.getOfficials(filters);

  if (req.query.search && typeof req.query.search === "string") {
    officials = searchOfficials(officials, req.query.search);
  }

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

function searchOfficials(
  officials: Awaited<ReturnType<typeof officialService.getOfficials>>,
  searchTerm: string
) {
  return officials.filter((official) => {
    const search = searchTerm.toLowerCase();
    const { name, position, jurisdiction, state, description, category } =
      official;

    return (
      name.toLowerCase().includes(search) ||
      position.toLowerCase().includes(search) ||
      jurisdiction.toLowerCase().includes(search) ||
      state.toLowerCase().includes(search) ||
      description.toLowerCase().includes(search) ||
      (typeof category !== "string" &&
        category.name.toLowerCase().includes(search)) ||
      (typeof category !== "string" &&
        category.description.toLowerCase().includes(search))
    );
  });
}
