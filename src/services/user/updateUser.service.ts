import { compareSync, hash } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser, IUserLogged } from "../../interfaces/users";


const updateUserService = async (
  full_name: string,
  email: string,
  password: string,
  number: string,
  id: string,
  loggedUser: IUserLogged
): Promise<IUser> => {
  const userRepository =  AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id});
  
  if(!findUser) {
    throw new AppError(404, "user not found")
  }

  if(email) {
    const existEmail = await userRepository.findOneBy({email});
    if(existEmail) {
      throw new AppError(404, "email already exists");
    }
  }

  if(number) {
    const existNumber = await userRepository.findOneBy({number});
    if(existNumber) {
      throw new AppError(404, "number already exists")
    }
  }

  if(loggedUser.id !== id) {
    throw new AppError(401, "No permission")
  }

  if(password && compareSync(password, findUser.password)) {
    throw new AppError(409, "Use a different password")
  }

  const hashedPassword = password && (await hash(password, 10));

  await userRepository.update(id, {
    full_name: full_name || findUser.full_name,
    email: email || findUser.email,
    password: password || findUser.password,
    number: number || findUser.number
  })

  const user = await userRepository.findOneBy({id});

  return user!;
}

export default updateUserService;