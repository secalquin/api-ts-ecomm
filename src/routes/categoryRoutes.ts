import { Router } from "express";
import { getAllCategories } from "../controllers/categoryController";
const router = Router();

router.get("/getAllCategories", getAllCategories);

export default router;
