import { Router } from 'express';
import usersRouter from '../routes/userRoutes';

const routes = Router();

routes.use('/user', usersRouter);

export default routes;