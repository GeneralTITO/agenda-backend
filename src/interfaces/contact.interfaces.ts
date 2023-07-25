import { z } from "zod";
import {
  contactCreateSchema,
  contactReadSchema,
  contactReturnSchema,
} from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import { Contact } from "../entities";

type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactUpdate = DeepPartial<Contact>;
type ContactReturn = z.infer<typeof contactReturnSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;

type ContactRepo = Repository<Contact>;

export {
  ContactCreate,
  ContactUpdate,
  ContactReturn,
  ContactRead,
  ContactRepo,
};
