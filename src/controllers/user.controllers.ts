import { Request, Response } from "express";
import { userServices } from "../services";
import { UserContacts, userReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: userReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(req.params.id);
  const user = await userServices.read(userId);
  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const user: userReturn = await userServices.update(req.body, id);
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);
  return res.status(204).json();
};

export default { create, read, destroy, update };
