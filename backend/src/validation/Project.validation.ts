import { ValidationResult } from "joi";
import { ProjectSchema } from "schema";
import { GlobalTypes } from "types";

namespace ProjectValidation {
  export const validateGetProject = (
    data: GlobalTypes.NexusGenArgTypes["Query"]["project"],
  ): ValidationResult =>
    ProjectSchema.Get.validate(data, {
      abortEarly: true,
    });

  export const validateCreateProject = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["createProject"],
  ): ValidationResult =>
    ProjectSchema.Create.validate(data, {
      abortEarly: true,
    });

  export const validateUpdateProject = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["updateProject"],
  ): ValidationResult =>
    ProjectSchema.Update.validate(data, { abortEarly: true });

  export const validateDeleteProject = (
    data: GlobalTypes.NexusGenArgTypes["Mutation"]["deleteProject"],
  ): ValidationResult =>
    ProjectSchema.Delete.validate(data, {
      abortEarly: true,
    });
}

export default ProjectValidation;
