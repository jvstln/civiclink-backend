import { Category } from "./category.type";

export interface Official {
  _id: string;
  image: string;
  level: string;
  name: string;
  position: string;
  jurisdiction: string;
  state: string;
  email: string;
  phone: string;
  description: string;
  category: string | Category;
}
