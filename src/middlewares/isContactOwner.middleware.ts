import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { contactRepository } from "../repositories";

export const isContactOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const idUser = Number(res.locals.decoded.sub);
  const idContact = Number(req.params.id);

  const contact = await contactRepository.findOne({
    where: { id: idContact },
    relations: { user: true },
  });
  if (!contact) {
    throw new AppError("Contato não encontrado.", 404);
  }
  if (contact.user.id !== idUser) {
    throw new AppError(
      "Você não tem permissão para modificar/excluir este contato.",
      403
    );
  }

  return next();
};
