import { handleError } from "./handleError.middleware";
import { idExists } from "./idExists.middleware";
import { uniqueEmail } from "./uniqueEmail.middleware";
import { validateBody } from "./validadeBody.middleware";

export default { handleError, idExists, uniqueEmail, validateBody };
