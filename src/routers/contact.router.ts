import { Router } from "express";
import middlewares from "../middlewares";
import { contactControllers } from "../controllers";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";

export const contactRouter: Router = Router();

contactRouter.post(
  "",
  middlewares.validateBody(contactCreateSchema),
  middlewares.uniqueEmail,
  middlewares.verifyToken,

  contactControllers.create
);

contactRouter.get("");
contactRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.isContactOwner,
  contactControllers.destroy
);
contactRouter.patch(
  "/:id",
  middlewares.verifyToken,
  middlewares.isContactOwner,
  middlewares.validateBody(contactUpdateSchema),
  contactControllers.update
);
