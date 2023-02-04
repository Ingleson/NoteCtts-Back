import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError";


const deleteUserService = async (
  id: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id});

  if(!findUser) {
    throw new AppError(404, "User Not Found");
  }

  await userRepository.delete({id})
}

export default deleteUserService;