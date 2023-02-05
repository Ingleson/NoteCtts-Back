import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contacts";

const createContactService = async ({
  full_name,
  number,
  email,
  userId,
}: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  
  if (!findUser) {
    throw new AppError(404, "User not found")
  }

  for (let i = 0; i < findUser.contacts.length; i++) {
    if(findUser.contacts[i].email == email || findUser.contacts[i].number == number) {
      throw new AppError(400, "contact Already Exists")
    }
  }

  const newContact = new Contact()
  newContact.full_name = full_name
  newContact.email = email
  newContact.number = number
  newContact.user = findUser

  contactRepository.create(newContact);
  const contact = await contactRepository.save(newContact);

  
  const savedContact = {
    id: contact.id,
    full_name,
    email,
    number,
    user: {id: findUser.id, full_name: findUser.full_name}
  }

  return savedContact;
}

export default createContactService;