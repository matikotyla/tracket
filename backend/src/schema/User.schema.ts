import Joi from "joi";
import { UserRule } from "rule";
import { GlobalTypes } from "types";

namespace UserSchema {
  export const Update = Joi.object<
    GlobalTypes.NexusGenArgTypes["Mutation"]["updateUser"]
  >({
    firstName: UserRule.Update.FirstName,
    lastName: UserRule.Update.LastName,
    name: UserRule.Update.Name,
  });
}

export default UserSchema;
