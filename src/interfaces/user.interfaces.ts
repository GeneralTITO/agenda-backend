import { z } from "zod";
import {
  userContactSchema,
  userCreateSchema,
  userReturnSchema,
  userSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";

type UserRead = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof userCreateSchema>;
type userReturn = z.infer<typeof userReturnSchema>;
type UserUpdate = DeepPartial<User>;
type UserContacts = z.infer<typeof userContactSchema>;
type UserRepo = Repository<User>;

export { UserRead, UserCreate, UserUpdate, userReturn, UserRepo , UserContacts};
