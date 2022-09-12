import { ValidationResult } from "joi";
import { AuthSchema } from "schema";
import { GlobalTypes } from "types";

namespace AuthValidation {
  export const validateLoginUser = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["loginUser"],
  ): ValidationResult => AuthSchema.Login.validate(data, { abortEarly: true });

  export const validateRegisterUser = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["registerUser"],
  ): ValidationResult =>
    AuthSchema.Register.validate(data, {
      abortEarly: true,
    });
}

export default AuthValidation;
