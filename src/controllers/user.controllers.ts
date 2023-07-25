import { Request, Response } from "express";
import userServices from "../services/user.services";
import { userReturn } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: userReturn = await userServices.create(req.body);
  return res.status(201).json(user);
};
const read = async (req: Request, res: Response): Promise<Response> => {
    const user: 
  return res.status(200).json();
};
// const update = async (): Promise => {
//   return;
// };
const destroy = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200);
};

export default { create, read, destroy };
