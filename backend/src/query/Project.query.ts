import { AuthenticationError, UserInputError } from "apollo-server";
import { ErrorConstant } from "@constant";
import { NotFoundError } from "@error";
import { list, nonNull, queryField, stringArg } from "nexus";
import { ProjectValidation } from "@validation";

namespace ProjectQuery {
  export const Get = queryField("project", {
    type: nonNull("Project"),
    args: {
      id: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { id } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      const { error } = ProjectValidation.validateGetProject(args);
      if (error) {
        throw new UserInputError(ErrorConstant.UserInputMessage);
      }

      const project = await context.prisma.project.findFirst({
        where: {
          AND: {
            id,
            userId,
          },
        },
      });

      if (!project) {
        throw new NotFoundError(ErrorConstant.NotFoundMessage);
      }

      return project;
    },
  });

  export const GetAll = queryField("projects", {
    type: nonNull(list(nonNull("Project"))),
    resolve(source, args, context, info) {
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      return context.prisma.project.findMany({
        where: {
          userId,
        },
      });
    },
  });
}

export default ProjectQuery;
