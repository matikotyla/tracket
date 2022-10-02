import Joi from "joi";

namespace UserRule {
  export namespace Update {
    export const FirstName = Joi.string().min(3).max(32).alphanum();
    export const LastName = Joi.string().min(3).max(32).alphanum();
    export const Name = Joi.string().min(3).max(32).alphanum();
  }
}

export default UserRule;
