import { Router } from "express";
import {
  getAllCategories,
  getCategoryWithProducts,
} from "../controllers/categoryController";

const router = Router();

router.get("/getAllCategories", getAllCategories);
router.get("/getCategoriesWithProducts/:categoryName", getCategoryWithProducts);

export default router;
