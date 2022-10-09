import { PrismaClient } from "@prisma/client";
import { ApolloError, ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";
import { ServerTypes } from "@types";
import { AuthUtil } from "@utils";
import { TokenExpiredError } from "jsonwebtoken";

export const prisma = new PrismaClient();

namespace ServerContext {
  export const Context: ContextFunction<
    ExpressContext,
    ServerTypes.Context
  > = ({ req, res }): ServerTypes.Context => {
    try {
      const token =
        req && req.headers.authorization
          ? AuthUtil.decode(req.headers.authorization)
          : null;

      return {
        prisma,
        userId: token?.userId,
      };
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new ApolloError("Token has expired", "TOKEN_EXPIRED");
      }

      return {
        prisma,
      };
    }
  };
}

export default ServerContext;
