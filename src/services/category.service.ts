import { categoryModel } from "../models/category.model";
import { Category } from "../types/category.type";

export const getCategories = async (filters: Partial<Category> = {}) => {
  const categories = await categoryModel.find(filters);
  return categories;
};

export const getCategoryById = async (id: string) => {
  const category = await categoryModel.findById(id);
  return category;
};

export const getCategoryByName = async (name: string) => {
  const category = await categoryModel.findOne({ name });
  return category;
};

export const createCategory = async (category: Omit<Category, "_id">) => {
  const newCategory = await categoryModel.create(category);
  return newCategory;
};
