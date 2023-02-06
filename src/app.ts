import "express-async-errors";
import "dotenv/config";

import express from 'express';
import cors from 'cors';
import appRoutes from './routes';
import errorMiddleware from './middlewares/error/error.middleware';

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET, POST, PATCH, DELETE')

  next();
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

appRoutes(app);
app.use(errorMiddleware);

app.listen(3000)
export default app;
