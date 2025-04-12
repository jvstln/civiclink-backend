import { Router } from "express";
import * as categoryController from "../controllers/category.controller";
import { createIdValidationMiddleware } from "../middlewares/validation.middleware";

export const categoryRouter = Router();

categoryRouter.param("categoryId", createIdValidationMiddleware("categoryId"));

categoryRouter.get("/", categoryController.getCategories);
categoryRouter.get("/:categoryId", categoryController.getCategoryById);
