import { Contact, User } from "../entities";
import { AppError } from "../errors";
import { ContactCreate, ContactRead, ContactReturn } from "../interfaces";
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
// const read = async (userId: number): Promise<ContactRead> => {
//   const contacts = await contactRepository.find({
//     where: { user: user },
//     relations: { contacts: true },
//   });
//   console.log(user);
//   return userContactSchema.parse(user);
// };
// const update = async (): Promise => {
//   return;
// };

// const update = async (contactId: number): Promise<ContactReturn> => {
//   return;
// };
const destroy = async (contactId: number): Promise<void> => {
  const contact: Contact | null = await contactRepository.findOneBy({
    id: contactId,
  });
  if (!contact) {
    throw new AppError("This contact does not exist", 404);
  }
  await contactRepository.softRemove(contact);
};

export default { create, destroy };
