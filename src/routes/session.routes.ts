import { Router } from "express";
import createSessionController from "../controllers/session/session.controller";
import errorMiddleware from "../middlewares/error/error.middleware";


const sessionRoutes = Router();

sessionRoutes.post('', errorMiddleware, createSessionController);

export default sessionRoutes;