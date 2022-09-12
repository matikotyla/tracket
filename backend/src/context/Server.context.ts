import { PrismaClient } from "@prisma/client";
import { ContextFunction } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";
import { ServerTypes } from "types";
import { AuthUtil } from "utils";

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
      return {
        prisma,
      };
    }
  };
}

export default ServerContext;
