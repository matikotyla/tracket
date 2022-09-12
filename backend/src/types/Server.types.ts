import { PrismaClient } from "@prisma/client";

namespace ServerTypes {
  export interface Context {
    prisma: PrismaClient;
    userId?: string;
  }
}

export type Context = ServerTypes.Context;

export default ServerTypes;
