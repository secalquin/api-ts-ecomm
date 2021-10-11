import { Router } from "express";
import {
  findSingleProduct,
  getAllProducts,
} from "../controllers/productController";

const router = Router();

router.get("/allProducts", getAllProducts);
router.get("/findProduct/:id", findSingleProduct);

export default router;
