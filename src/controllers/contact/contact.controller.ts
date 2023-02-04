import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/AppError";
import createContactService from "../../services/contact/createContact.service";
import deleteContactService from "../../services/contact/deleteContact.service";
import listContactsByUserService from "../../services/contact/listContactsByUser.service";
import updateContactService from "../../services/contact/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const {full_name, email, number} = req.body;
  const userId = req.user.id;

  const newContact = await createContactService({
    full_name, email, number, userId
  })
  return res.status(201).send(newContact)
  
}

const listContactsByUserController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const ContactsList = await listContactsByUserService(userId);
  return res.json(ContactsList)
}

const updateContactController = async (req: Request, res: Response) => {
  const {full_name, email, number} = req.body;
  const id = req.params.id;
  const userId = req.user.id;

  const updatedContact = await updateContactService({
    full_name, email, number, id, userId
  })
  return res.json(updatedContact);
}

const deleteContactController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const id = req.params.id;

  const deletedContact = await deleteContactService({id, userId});

  return res.json({message: 'Contact deleted'})
}

export {
  createContactController,
  listContactsByUserController,
  updateContactController,
  deleteContactController,
}