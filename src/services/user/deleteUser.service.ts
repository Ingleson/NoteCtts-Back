import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"


const deleteUserService = async (
  userId: string
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);
  await userRepository.delete({id: userId})
}

export default deleteUserService;