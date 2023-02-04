import { IUserRequest, IUserResponse } from '../../interfaces/users/index';
import { hash } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { AppError } from '../../errors/AppError';

const createUserService = async ({
  full_name,
  email,
  password,
  number
}: IUserRequest): Promise<IUserResponse> => {
  
  const userRepository = AppDataSource.getRepository(User);

  if(!password) {
    throw new AppError(400, "Password Required")
  }
  if(!full_name || !email || !number) {
    throw new AppError(400, "Data is Missing")
  }

  const findUser = await userRepository.findOne({
    where: {email:email}
  })

  if(findUser) {
    throw new AppError(400, "User Already Exists")
  }

  const hashedPassword = await hash(password, 10)

  await userRepository.save({
    full_name,
    email,
    password: hashedPassword,
    number,
  })

  const newUser = await userRepository.findOneBy({
    email
  })

  return newUser!
}

export default createUserService;