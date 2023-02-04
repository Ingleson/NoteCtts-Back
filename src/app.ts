import "express-async-errors";
import "dotenv/config";

import express from 'express';
import appRoutes from './routes';
import errorMiddleware from './middlewares/error/error.middleware';

const app = express();
app.use(express.json());

appRoutes(app);
app.use(errorMiddleware);

app.listen(3000)
export default app;
