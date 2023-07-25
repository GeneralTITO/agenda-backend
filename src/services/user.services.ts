import { UserCreate, userReturn } from "../interfaces";
import { User } from "../entities";

import { userRepository } from "../repositories";
import { userReturnSchema } from "../schemas";

const create = async (payload: UserCreate): Promise<userReturn> => {
  const user: User = userRepository.create(payload);
  await userRepository.save(user);
  return userReturnSchema.parse(user);
};
const read = async (userId: number): Promise<userReturn> => {
  const user = userRepository.findOne({
    where: { id: userId },
    relations: { contacts: true },
  });
  return userReturnSchema.parse(user);
};
// const update = async (): Promise => {
//   return;
// };
const destroy = async (user: User): Promise<void> => {
  await userRepository.softRemove(user);
};

export default { create, read, destroy };
