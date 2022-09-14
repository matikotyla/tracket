import { SchemaTypes } from "types";

namespace AuthMessages {
  export namespace Login {
    export const Email: SchemaTypes.Message = {};
  }

  export namespace Register {
    export const Email: SchemaTypes.Message = {
      "string.base": "Email should be a type of text",
      "string.empty": "Email is not allowed to be empty",
      "string.email": "Email is not a valid email",
      "any.required": "Email is a required field",
    };

    export const FirstName: SchemaTypes.Message = {
      "string.base": "First name should be a type of text",
      "string.empty": "First name is not allowed to be empty",
      "string.alphanum": "First name must be alpha-numeric",
      "string.min": "First name must be at least 3 characters long",
      "string.max": "First name must be at most 32 characters long",
      "any.required": "First name is a required field",
    };

    export const LastName: SchemaTypes.Message = {
      "string.base": "Last name should be a type of text",
      "string.empty": "Last name is not allowed to be empty",
      "string.alphanum": "Last name must be alpha-numeric",
      "string.min": "Last name must be at least 3 characters long",
      "string.max": "Last name must be at most 32 characters long",
      "any.required": "Last name is a required field",
    };

    export const Password: SchemaTypes.Message = {
      "string.base": "Password should be a type of text",
      "string.empty": "Password is not allowed to be empty",
      "string.min": "Password must be at least 8 characters long",
      "string.max": "Password must be at most 32 characters long",
      "password.minOfNumeric":
        "Password must contain at least 1 numeric character",
      "password.minOfSpecialCharacters":
        "Password must contain at least 1 special character",
      "password.minOfUppercase":
        "Password must contain at least 1 uppercase letter",
      "password.minOfLowercase":
        "Password must contain at least 1 lowercase letter",
      "password.noWhiteSpaces": "Password cannot containt any white spaces",
      "any.required": "Password is a required field",
    };

    export const Approval: SchemaTypes.Message = {
      "boolean.base": "You must agree to the privacy policy",
      "any.invalid": "You must agree to the privacy policy",
      "any.required": "The approval is required",
    };
  }
}
export default AuthMessages;
