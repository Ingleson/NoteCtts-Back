import { compare } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import "dotenv/config";


const createSessionUserService = async ({
  email,
  password
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({email});

  if(!user) {
    throw new AppError(403, "Invalid Email or Password");
  }

  const passwordMatch = await compare(password, user.password);

  if(!passwordMatch) {
    throw new AppError(403, "Invalid Email or Password");
  }

  const token = jwt.sign(
    {
      email: user.email
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id
    }
  );

  return token;
}

export default createSessionUserService;