import { SchemaTypes } from "types";

namespace ProjectMessages {
  export namespace Create {
    export const Name: SchemaTypes.Message = {
      "string.base": "Name should be a text type",
      "string.empty": "Name is not allowed to be empty",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be at most 32 characters long",
      "any.required": "Name is a required field",
    };

    export const Color: SchemaTypes.Message = {
      "string.base": "Color should be a type of text",
      "string.empty": "Color is not allowed to be empty",
      "any.only": "The selected color is invalid",
      "any.required": "Color is a required field",
    };
  }

  export namespace Update {
    export const Name: SchemaTypes.Message = {
      "string.base": "Name should be a text type",
      "string.empty": "Name is not allowed to be empty",
      "string.min": "Name must be at least 3 characters long",
      "string.max": "Name must be at most 32 characters long",
      "any.required": "Name is a required field",
    };

    export const Color: SchemaTypes.Message = {
      "string.base": "Color should be a type of text",
      "string.empty": "Color is not allowed to be empty",
      "any.only": "The selected color is invalid",
      "any.required": "Color is a required field",
    };
  }
}

export default ProjectMessages;
