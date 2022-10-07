import { AuthConstant } from "@constant";
import { verify } from "jsonwebtoken";
import { AuthTypes } from "@types";

namespace AuthUtil {
  export const decode = (header: string): AuthTypes.TokenPayload => {
    const token = header.replace("Bearer ", "");

    if (!token) {
      throw new Error("No token found");
    }

    return verify(token, AuthConstant.Secret) as AuthTypes.TokenPayload;
  };
}

export default AuthUtil;
