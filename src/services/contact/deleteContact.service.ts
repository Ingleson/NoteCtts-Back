import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IDeleteContact } from "../../interfaces/contacts";


const deleteContactService = async({
  id,
  userId
}: IDeleteContact) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({id: userId});

  if (!findUser) {
    throw new AppError(403, "You dont have acess")
  }

  let findContact = null;

  for (let i = 0; i < findUser.contacts.length; i++) {
    if(findUser.contacts[i].id == id) {
      findContact = findUser.contacts[i]
      await contactRepository.delete({id:id})
    }
  }

  if(findContact == null) {
    throw new AppError(404, "Contact not found")
  }

  return true
}

export default deleteContactService;