import { ApolloError, UserInputError } from "apollo-server";
import { compare, hash } from "bcryptjs";
import { AuthConstant } from "@constant";
import { NotFoundError } from "@error";
import { sign } from "jsonwebtoken";
import { mutationField, nonNull, stringArg } from "nexus";
import { AuthTypes } from "@types";
import { AuthValidation } from "@validation";

namespace AuthMutation {
  export const Login = mutationField("loginUser", {
    type: nonNull("Payload"),
    args: {
      email: nonNull(stringArg()),
      password: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { email, password } = args;

      const { error } = AuthValidation.validateLoginUser(args);
      if (error) {
        throw new UserInputError("Object is invalid");
      }

      const user = await context.prisma.user.findUnique({
        where: { email: email },
      });
      if (!user) {
        throw new NotFoundError("No such user found");
      }

      const valid = await compare(password, user.password);
      if (!valid) {
        throw new UserInputError("Invalid password");
      }

      const token = sign(
        {
          userId: user.id,
        },
        AuthConstant.Secret,
        {
          expiresIn: AuthConstant.ExpiresIn,
        },
      );

      return { token };
    },
  });

  export const Register = mutationField("registerUser", {
    type: nonNull("User"),
    args: {
      email: nonNull(stringArg()),
      firstName: nonNull(stringArg()),
      lastName: nonNull(stringArg()),
      password: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { email, firstName, lastName, password } = args;

      const { error } = AuthValidation.validateRegisterUser(args);
      console.log(error);
      if (error) {
        throw new UserInputError("Object is invalid");
      }

      const user = await context.prisma.user.findUnique({
        where: { email },
      });
      if (user) {
        throw new Error("User alredy exists");
      }

      const hashPassword = await hash(password, 10);

      return await context.prisma.user.create({
        data: {
          email,
          name: "",
          firstName,
          lastName,
          password: hashPassword,
        },
      });
    },
  });
}

export default AuthMutation;
