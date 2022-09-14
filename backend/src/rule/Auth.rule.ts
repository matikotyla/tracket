import Joi from "joi";

namespace AuthRule {
  export namespace Login {
    export const Email = Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required();
    export const Password = Joi.string().required();
  }

  export namespace Register {
    export const Email = Joi.string()
      .email({
        tlds: { allow: false },
      })
      .required();
    export const FirstName = Joi.string().min(3).max(32).alphanum().required();
    export const LastName = Joi.string().min(3).max(32).alphanum().required();
    export const Name = Joi.string().min(3).max(32).alphanum().required();
    export const Password = Joi.string().min(8).max(32).required();
  }
}

export default AuthRule;
