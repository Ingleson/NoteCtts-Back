import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IContactUpdate } from "../../interfaces/contacts";


const updateContactService = async({
  id, 
  full_name, 
  email,
  number,
  userId
}: IContactUpdate) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({id: userId});

  if (!user) {
    throw new AppError(403, "You don't have acess")
  }

  const contact = await contactRepository.findOneBy({id:id});

  if (!contact) {
    throw new AppError(404, "Contact not found")
  }

  await contactRepository.update(contact.id, {
    full_name: full_name || contact.full_name,
    email: email || contact.email,
    number: number || contact.number
  })

  const updatedContact = await contactRepository.findOneBy({id:id})

  return updatedContact;
}

export default updateContactService;