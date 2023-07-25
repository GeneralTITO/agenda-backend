import { Request, Response } from "express";
import { ContactRead, UserContacts, userReturn } from "../interfaces";
import { contactServices } from "../services";
import { Contact } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
  const contact = await contactServices.create(
    req.body,
    res.locals.decoded.sub
  );
  return res.status(201).json(contact);
};
// const read = async (req: Request, res: Response): Promise<Response> => {
//   const userId: number = Number(req.params.id);
//   const user = await userServices.read(userId);
//   return res.status(200).json(user);
// };
// // const update = async (): Promise => {
// //   return;
// // };
const destroy = async (req: Request, res: Response): Promise<Response> => {
  const contactId: number = Number(req.params.id);
  await contactServices.destroy(contactId);
  return res.status(204).json();
};

export default { create, destroy };
