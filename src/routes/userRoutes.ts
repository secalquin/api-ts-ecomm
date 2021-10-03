import { Router } from "express";
import { createUser, loginUser, todoUser } from "../controllers/userController";

const router = Router();

router.post("/login", loginUser);
router.get("/getAll", todoUser);
router.post("/create", createUser);

export default router;
