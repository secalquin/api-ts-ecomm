import { Router } from "express";
import productRoutes from "../routes/productRoutes";
import usersRouter from "../routes/userRoutes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/product", productRoutes);

export default routes;
