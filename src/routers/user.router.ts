import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
);
userRouter.get(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isOrOwner,
  userControllers.read
);
userRouter.patch(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isOrOwner,
  middlewares.validateBody(userUpdateSchema),
  userControllers.update
);
userRouter.delete(
  "/:id",
  middlewares.idExists,
  middlewares.verifyToken,
  middlewares.isOrOwner,
  userControllers.destroy
);
