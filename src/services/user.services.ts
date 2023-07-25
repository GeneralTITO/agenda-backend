import { UserContacts, UserCreate, UserRead, userReturn } from "../interfaces";
import { User } from "../entities";

import { userRepository } from "../repositories";
import { userContactSchema, userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<userReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};
const read = async (userId: number): Promise<UserContacts> => {
  const user =await userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  console.log(user)
  return userContactSchema.parse(user);
};
// const update = async (): Promise => {
//   return;
// };
const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, destroy };
