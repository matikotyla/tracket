import Joi from "joi";

import { AuthRules } from "rules";
import { AuthTypes } from "types";

namespace AuthSchema {
  export namespace Login {
    export const Form = Joi.object<AuthTypes.Login.Form, true>({
      email: AuthRules.Login.Email,
      password: AuthRules.Login.Passowrd,
    });
  }

  export namespace Register {
    export const Form = Joi.object<AuthTypes.Register.Form, true>({
      email: AuthRules.Register.Email,
      firstName: AuthRules.Register.FirstName,
      lastName: AuthRules.Register.LastName,
      password: AuthRules.Register.Password,
      approval: AuthRules.Register.Approval,
    });
  }
}

export default AuthSchema;
