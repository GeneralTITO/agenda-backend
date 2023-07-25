import { Contact, User } from "../entities";
import { AppError } from "../errors";
import {
  ContactCreate,
  ContactReturn,
  ContactUpdate,
} from "../interfaces";
import { contactRepository, userRepository } from "../repositories";
import { contactSchema } from "../schemas";


const create = async (
  payload: ContactCreate,
  userId: number
): Promise<ContactReturn> => {
  const user: User = (await userRepository.findOneBy({ id: userId }))!;
  const contact: Contact = contactRepository.create({ ...payload, user });
  await contactRepository.save(contact);
  return contactSchema.parse(contact);
};


const update = async (
  payload: ContactUpdate,
  contactId: number
): Promise<ContactReturn> => {
  const contactFound: Contact | null = await contactRepository.findOne({
    where: { id: contactId },
  });
  if (!contactFound) {
    throw new AppError("Este contato não existe", 404);
  }
  const updatedContact: Contact = contactRepository.merge(
    contactFound,
    payload
  );
  await contactRepository.save(updatedContact);
  return contactSchema.parse(updatedContact);
};


const destroy = async (contactId: number): Promise<void> => {
  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!contact) {
    throw new AppError("This contact does not exist", 404);
  }
  await contactRepository.softRemove(contact);
};

export default { create, destroy, update };
