import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError";


const deleteUserService = async (
  id: string,
  userId: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id});

  if(!findUser) {
    throw new AppError(404, "User Not Found");
  }

  if(userId != findUser.id) {
    throw new AppError(403, "You cannot delete other users")
  }

  await userRepository.delete({id})
}

export default deleteUserService;