import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user/users.controller";
import ensureAuthMiddleware from "../middlewares/error/ensureAuth.middleware";

const userRoutes = Router();

userRoutes.post("", createUserController);
userRoutes.get("", ensureAuthMiddleware, listUsersController);
userRoutes.patch("/:id", ensureAuthMiddleware, updateUserController);
userRoutes.delete("/:id", ensureAuthMiddleware, deleteUserController);


export default userRoutes;