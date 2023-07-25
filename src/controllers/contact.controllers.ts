import { Request, Response } from "express";
import {
  ContactRead,
  ContactReturn,
  UserContacts,
  userReturn,
} from "../interfaces";
import { contactServices } from "../services";
import { Contact } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const contact = await contactServices.create(
    req.body,
    res.locals.decoded.sub
  );
  return res.status(201).json(contact);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const contactId: number = Number(req.params.id);
  const payload = req.body;

  const updatedContact: ContactReturn = await contactServices.update(
    payload,
    contactId
  );

  return res.status(200).json(updatedContact);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  const contactId: number = Number(req.params.id);
  await contactServices.destroy(contactId);
  return res.status(204).json();
};

export default { create, destroy , update};
