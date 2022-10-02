import Joi from "joi";
import { UserRules } from "rules";
import { UserTypes } from "types";

namespace UserSchema {
  export namespace Update {
    export const Form = Joi.object<UserTypes.Update.Form>({
      name: UserRules.Update.Name,
      firstName: UserRules.Update.FirstName,
      lastName: UserRules.Update.LastName,
    });
  }
}

export default UserSchema;
