import React from "react";
import { nanoid } from "nanoid";
import { BrandList } from "../pages/Brand-List";
import { CategoryList } from "../pages/Category-list";
import { SubCategoryList } from "../pages/Sub-Category-List";
import { Product } from "../pages/Product";
import { CreateTabCategory } from "../components/Create-Tabs";
import { CategoryEditTab } from "../components/Category-Edit-Tab";
import { CreateSubTabCategory } from "../components/Create-Sub-Category-Tab";
import { SubEditTab } from "../components/Sub-Edit-Tab";

interface RouteType {
  component: React.FC;
  id: string;
  path?: string;
}

export const RoutersData: RouteType[] = [
  {
    id: nanoid(),
    component: CategoryList,
  },
  {
    id: nanoid(),
    component: SubCategoryList,
    path: "/app/sub-category-list",
  },
  {
    id: nanoid(),
    component: BrandList,
    path: "/app/brand-list",
  },
  {
    id: nanoid(),
    component: Product,
    path: "/app/product",
  },
  {
    id: nanoid(),
    component: CreateTabCategory,
    path: "/app/create-category",
  },
  {
    id: nanoid(),
    component: CategoryEditTab,
    path: "/app/edit-category/:id",
  },
  {
    id: nanoid(),
    component: CreateSubTabCategory,
    path: "/app/sub-category-list/create-sub-category",
  },
  {
    id: nanoid(),
    component: SubEditTab,
    path: "/app/sub-edit-category/:id",
  },
];
