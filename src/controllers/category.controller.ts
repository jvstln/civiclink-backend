import { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { ResponseError } from "../utils/error";

export const getCategories = async (req: Request, res: Response) => {
  const { name } = req.query;
  const filters: Record<string, string> = {};

  if (name && typeof name === "string") filters.name = name;

  const categories = await categoryService.getCategories(filters);

  res.json({
    status: "success",
    message: "Categories fetched successfully",
    data: categories,
  });
};

export const getCategoryById = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  const category = await categoryService.getCategoryById(categoryId);

  if (!category) {
    throw new ResponseError(404, "Category not found");
  }

  res.json({
    status: "success",
    message: "Category fetched successfully",
    data: category,
  });
};

export const getCategoryByName = async (req: Request, res: Response) => {
  const { name } = req.params;
  const category = await categoryService.getCategoryByName(name);

  if (!category) {
    throw new ResponseError(404, "Category not found");
  }

  res.json({
    status: "success",
    message: "Category fetched successfully",
    data: category,
  });
};
