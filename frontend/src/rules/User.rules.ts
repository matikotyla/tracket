import Joi from "joi";
import { UserMessages } from "messages";

namespace UserRules {
  export namespace Update {
    export const Name = Joi.string()
      .min(3)
      .max(32)
      .alphanum()
      .required()
      .messages(UserMessages.Update.Name);
    export const FirstName = Joi.string()
      .min(3)
      .max(32)
      .alphanum()
      .required()
      .messages(UserMessages.Update.FirstName);
    export const LastName = Joi.string()
      .min(3)
      .max(32)
      .alphanum()
      .required()
      .messages(UserMessages.Update.LastName);
  }
}

export default UserRules;
