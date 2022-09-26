import Joi from "joi";
import { joiPasswordExtendCore, JoiPasswordExtend } from "joi-password";
import { AuthMessages } from "messages";

const JoiPassword: JoiPasswordExtend = Joi.extend(joiPasswordExtendCore);

namespace AuthRules {
  export namespace Login {
    export const Email = Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required()
      .messages(AuthMessages.Login.Email);

    export const Passowrd = Joi.string()
      .required()
      .messages(AuthMessages.Login.Password);
  }

  export namespace Register {
    export const Email = Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required()
      .messages(AuthMessages.Register.Email);

    export const FirstName = Joi.string()
      .min(3)
      .max(32)
      .alphanum()
      .required()
      .messages(AuthMessages.Register.FirstName);

    export const LastName = Joi.string()
      .min(3)
      .max(32)
      .alphanum()
      .required()
      .messages(AuthMessages.Register.LastName);

    export const Password = JoiPassword.string()
      .min(8)
      .max(32)
      .minOfNumeric(1)
      .minOfSpecialCharacters(1)
      .minOfUppercase(1)
      .minOfLowercase(1)
      .noWhiteSpaces()
      .required()
      .messages(AuthMessages.Register.Password);

    export const Approval = Joi.boolean()
      .invalid(false)
      .required()
      .messages(AuthMessages.Register.Approval);
  }
}

export default AuthRules;
