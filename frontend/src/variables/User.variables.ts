import { makeVar } from "@apollo/client";

import { UserTypes } from "types";

namespace UserVariables {
  export const user = makeVar<UserTypes.User | null>(null);
  export const loading = makeVar<boolean>(false);
  export const counter = makeVar<number>(0);
}

export default UserVariables;
