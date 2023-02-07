import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../../errors/AppError";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if(!token) {
    throw new AppError(401, "Invalid Token")
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if(error) {
      throw new AppError(401, "Invalid Token");
    }

    req.user = {
      email: decoded.email,
      id: decoded.sub,
    }

    next();
  })
}

export default ensureAuthMiddleware;