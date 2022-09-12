import { AuthenticationError, UserInputError } from "apollo-server";
import { ErrorConstant } from "constant";
import { NotFoundError } from "error";
import { list, nonNull, queryField, stringArg } from "nexus";
import { TaskValidation } from "validation";

namespace TaskQuery {
  export const Get = queryField("task", {
    type: nonNull("Task"),
    args: {
      id: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { id } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      const { error } = TaskValidation.validateGetTask(args);
      if (error) {
        throw new UserInputError(ErrorConstant.UserInputMessage);
      }

      const task = await context.prisma.task.findFirst({
        where: {
          AND: {
            id,
            project: {
              userId,
            },
          },
        },
      });

      if (!task) {
        throw new NotFoundError(ErrorConstant.NotFoundMessage);
      }

      return task;
    },
  });

  export const GetAll = queryField("tasks", {
    type: nonNull(list(nonNull("Task"))),
    async resolve(source, args, context, info) {
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      return await context.prisma.task.findMany({
        where: {
          project: {
            userId,
          },
        },
      });
    },
  });
}

export default TaskQuery;
