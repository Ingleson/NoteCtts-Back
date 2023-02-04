import { Request, Response } from "express"
import { IUserLogin } from "../../interfaces/users"
import createSessionUserService from "../../services/sessions/createSessionUser.service";

const createSessionController = async (req: Request, res: Response) => {
  const data: IUserLogin = req.body;
  const token = await createSessionUserService(data);
  return res.json({token});
}

export default createSessionController;