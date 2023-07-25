import { NextFunction, Request, Response } from "express";
import { Contact, User } from "../entities";
import { contactRepository, userRepository } from "../repositories";
import { AppError } from "../errors";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;
  if (!email) return next();

  const foundEntity: User | null = await userRepository.findOneBy({ email });
  const foundEntityContact: Contact | null = await contactRepository.findOneBy({
    email,
  });
  if (foundEntity || foundEntityContact)
    throw new AppError("Email already exists", 409);

  return next();
};
