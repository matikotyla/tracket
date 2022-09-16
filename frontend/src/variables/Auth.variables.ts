import { makeVar } from "@apollo/client";
import { AuthUtils } from "utils";

namespace AuthVariables {
  export const authenticated = makeVar<boolean>(AuthUtils.isToken());
}

export default AuthVariables;
