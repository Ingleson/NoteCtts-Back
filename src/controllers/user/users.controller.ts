import { Request, Response} from 'express';
import { instanceToPlain } from "class-transformer";
import { IUserRequest, IUserResponse, IUserUpdate } from "../../interfaces/users"

import createUserService from "../../services/user/createUser.service";
import listUsersService from '../../services/user/listUsers.service';
import updateUserService from '../../services/user/updateUser.service';
import deleteUserService from '../../services/user/deleteUser.service';


const createUserController = async (req: Request, res: Response) => {
  const user: IUserRequest = req.body;
  const createdUser: IUserResponse = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
}

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.json(instanceToPlain(users));
}

const updateUserController = async (req: Request, res: Response) => {
  const { full_name, email, password, number }: IUserUpdate = req.body;
  const id: string = req.user.id;
  const updatedUser = await updateUserService(
    full_name,
    email,
    password,
    number,
    id
  )

  return res.json(instanceToPlain(updatedUser));
}

const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const userId: string = req.user.id;
  await deleteUserService(id, userId)
  return res.json({message: "User Deleted"})
}

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController
}