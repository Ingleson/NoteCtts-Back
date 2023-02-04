import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError";


const listContactsByUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({id: userId})

  if(!user) {
    throw new AppError(404, "User not found")
  }

  return user.contacts;
}

export default listContactsByUserService;