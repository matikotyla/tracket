import { SchemaTypes } from "types";

namespace UserMessages {
  export namespace Update {
    export const Name: SchemaTypes.Message = {
      "string.base": "Name should be a type of text",
      "string.empty": "Name is not allowed to be empty",
      "string.alphanum": "Name must be alpha-numeric",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be at most 32 characters long",
      "any.required": "Name is a required field",
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
  }
}

export default UserMessages;
