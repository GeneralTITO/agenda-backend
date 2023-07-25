import { z } from "zod";
import { contactSchema } from "./contact.schemas";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250),
  email: z.string().email().max(100),
  phone: z.string().max(20),
  password: z.string().max(100),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const userReturnSchema = userSchema.omit({ password: true });
const userUpdateSchema = userCreateSchema.partial();

const userContactSchema = userReturnSchema.extend({
  contacts: contactSchema.array(),
});

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  userUpdateSchema,
  userContactSchema,
};
