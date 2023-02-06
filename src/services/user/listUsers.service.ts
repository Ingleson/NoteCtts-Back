import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError";

const listUsersService = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({id: userId})
  if(!user) {
    throw new AppError(404, "User Not Found")
  }
  return user;
}

export default listUsersService;