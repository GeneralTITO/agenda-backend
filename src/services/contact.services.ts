import { Contact, User } from "../entities";
import { ContactCreate, ContactReturn } from "../interfaces";
import { contactRepository, userRepository } from "../repositories";

const create = async (
  payload: ContactCreate,
  userId: number
): Promise<ContactReturn> => {
  const user: User = (await userRepository.findOneBy({ id: userId }))!;
  const contact: Contact = contactRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};
const read = async (userId: number): Promise<UserContacts> => {
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  console.log(user);
  return userContactSchema.parse(user);
};
// const update = async (): Promise => {
//   return;
// };
const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, destroy };
