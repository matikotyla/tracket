import { ValidationResult } from "joi";
import { UserSchema } from "@schema";
import { GlobalTypes } from "@types";

namespace UserValidation {
  export const validateUpdateUser = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["updateUser"],
  ): ValidationResult =>
    UserSchema.Update.validate(data, {
      abortEarly: true,
    });
}

export default UserValidation;
