import { AuthenticationError } from "apollo-server";
import { ErrorConstant } from "@constant";
import { NotFoundError } from "@error";
import { nonNull, queryField } from "nexus";

namespace UserQuery {
  export const Get = queryField("user", {
    type: nonNull("User"),
    async resolve(source, args, context, info) {
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      const user = await context.prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new NotFoundError(ErrorConstant.NotFoundMessage);
      }

      return user;
    },
  });
}

export default UserQuery;
