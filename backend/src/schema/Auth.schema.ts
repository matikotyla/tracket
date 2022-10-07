import Joi from "joi";
import { AuthRule } from "@rule";
import { GlobalTypes } from "@types";

namespace AuthSchema {
  export const Login = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["loginUser"],
    true
  >({
    email: AuthRule.Login.Email,
    password: AuthRule.Login.Password,
  });

  export const Register = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["registerUser"],
    true
  >({
    email: AuthRule.Register.Email,
    firstName: AuthRule.Register.FirstName,
    lastName: AuthRule.Register.LastName,
    password: AuthRule.Register.Password,
  });
}

export default AuthSchema;
