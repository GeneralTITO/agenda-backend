import { z } from "zod";

const contactSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(250),
  email: z.string().email().max(100),
  phone: z.string().max(20),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});
const contactUpdateSchema = contactCreateSchema.partial();
const contactReadSchema = contactSchema.array();

export {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactReadSchema,
};
