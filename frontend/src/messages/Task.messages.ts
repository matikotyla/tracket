import { SchemaTypes } from "types";

namespace TaskMessages {
  export namespace Create {
    export const Content: SchemaTypes.Message = {
      "string.base": "Content should be a text type",
      "string.empty": "Content is not allowed to be empty",
      "string.min": "Content must be at least 3 characters long",
      "string.max": "Content must be at most 32 characters long",
      "any.required": "Content is a required field",
    };

    export const Description: SchemaTypes.Message = {
      "string.base": "Description should be a text type",
      "string.empty": "Description is not allowed to be empty",
      "string.min": "Description must be at least 3 characters long",
      "string.max": "Description must be at most 128 characters long",
      "any.required": "Description is a required field",
    };

    export const Project: SchemaTypes.Message = {
      "object.base": "Project must be a valid object",
      "any.required": "Project is a required field",
    };

    export const ProjectId: SchemaTypes.Message = {
      "string.base": "Project id should be a text type",
      "string.empty": "Project id is not allowed to be empty",
      "string.length": "Project id has to have a length of 24 characters",
      "any.required": "Project id is a required field",
    };
  }

  export namespace Update {
    export const Content: SchemaTypes.Message = {
      "string.base": "Content should be a text type",
      "string.empty": "Content is not allowed to be empty",
      "string.min": "Content must be at least 3 characters long",
      "string.max": "Content must be at most 32 characters long",
    };

    export const Description: SchemaTypes.Message = {
      "string.base": "Description should be a text type",
      "string.empty": "Description is not allowed to be empty",
      "string.min": "Description must be at least 3 characters long",
      "string.max": "Description must be at most 128 characters long",
    };
  }
}

export default TaskMessages;
