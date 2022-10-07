import { ValidationResult } from "joi";
import { TaskSchema } from "@schema";
import { GlobalTypes } from "@types";

namespace TaskValidation {
  export const validateGetTask = (
    data: GlobalTypes.NexusGenArgTypes["Query"]["task"],
  ): ValidationResult =>
    TaskSchema.Get.validate(data, {
      abortEarly: true,
    });

  export const validateCreateTask = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["createTask"],
  ): ValidationResult => TaskSchema.Create.validate(data, { abortEarly: true });

  export const validateUpdateTask = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["updateTask"],
  ): ValidationResult => TaskSchema.Update.validate(data, { abortEarly: true });

  export const validateDeleteTask = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["deleteTask"],
  ): ValidationResult =>
    TaskSchema.Delete.validate(data, {
      abortEarly: true,
    });
}

export default TaskValidation;
