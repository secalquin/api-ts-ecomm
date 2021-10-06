import { Router } from "express";
import {
  createUser,
  loginUser,
  todoUser,
  whoami,
} from "../controllers/userController";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.post("/login", loginUser);
router.get("/getAll", todoUser);
router.post("/create", createUser);
router.get("/whoami", [authenticateToken], whoami);

export default router;
