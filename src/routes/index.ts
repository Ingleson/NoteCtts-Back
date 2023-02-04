import { Express } from 'express';
import contactRoutes from './contacts.routes';
import sessionRoutes from './session.routes';
import userRoutes from './users.routes';

const appRoutes = (app: Express) => {
  app.use("/user", userRoutes);
  app.use("/login", sessionRoutes);
  app.use("/contact", contactRoutes)
}

export default appRoutes;