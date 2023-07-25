import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validateBody } from "./validadeBody.middleware";
import { verifyToken } from "./verifyToken.middleware";
import { isOrOwner } from "./isOwner.middleware";
import { isContactOwner } from "./isContactOwner.middleware";

export default {
  handleError,
  idExists,
  uniqueEmail,
  validateBody,
  verifyToken,
  isOrOwner,
  isContactOwner,
};
