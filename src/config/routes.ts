import { Router } from "express";
import productRoutes from "../routes/productRoutes";
import usersRouter from "../routes/userRoutes";
import categoryRouter from "../routes/categoryRoutes";

const routes = Router();

routes.use("/user", usersRouter);
routes.use("/product", productRoutes);
routes.use("/category", categoryRouter);

export default routes;
