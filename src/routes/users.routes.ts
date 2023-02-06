import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user/users.controller";
import ensureAuthMiddleware from "../middlewares/error/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.patch("", ensureAuthMiddleware, updateUserController);
userRoutes.delete("", ensureAuthMiddleware, deleteUserController);


export default userRoutes;