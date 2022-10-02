import { AuthenticationError, UserInputError } from "apollo-server";
import { ErrorConstant } from "constant";
import { NotFoundError } from "error";
import { mutationField, nonNull, stringArg } from "nexus";
import { UserValidation } from "validation";

namespace UserMutation {
  export const Update = mutationField("updateUser", {
    type: nonNull("User"),
    args: {
      name: stringArg(),
      firstName: stringArg(),
      lastName: stringArg(),
    },
    async resolve(source, args, context, info) {
      const { name, firstName, lastName } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError("You have to be logged in");
      }

      const { error } = UserValidation.validateUpdateUser(args);
      if (error) {
        throw new UserInputError(ErrorConstant.UserInputMessage);
      }

      const user = await context.prisma.user.findFirst({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw new NotFoundError(ErrorConstant.NotFoundMessage);
      }

      return await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name: name ?? undefined,
          firstName: firstName ?? undefined,
          lastName: lastName ?? undefined,
        },
      });
    },
  });
}

export default UserMutation;
