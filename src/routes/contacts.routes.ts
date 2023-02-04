import { Router } from "express";
import {createContactController, deleteContactController, listContactsByUserController, updateContactController} from "../controllers/contact/contact.controller";
import ensureAuthMiddleware from "../middlewares/error/ensureAuth.middleware";


const contactRoutes = Router();

contactRoutes.post("", ensureAuthMiddleware, createContactController);
contactRoutes.get("", ensureAuthMiddleware, listContactsByUserController);
contactRoutes.patch("/:id", ensureAuthMiddleware, updateContactController);
contactRoutes.delete("/:id", ensureAuthMiddleware, deleteContactController);

export default contactRoutes;