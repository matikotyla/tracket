import { AuthenticationError, UserInputError } from "apollo-server";
import { ErrorConstant } from "@constant";
import { NotFoundError } from "@error";
import { booleanArg, mutationField, nonNull, stringArg } from "nexus";

import { TaskValidation } from "@validation";

namespace TaskMutation {
  export const Create = mutationField("createTask", {
    type: nonNull("Task"),
    args: {
      content: nonNull(stringArg()),
      description: nonNull(stringArg()),
      projectId: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { content, description, projectId } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError("You have to be logged in");
      }

      const { error } = TaskValidation.validateCreateTask(args);
      if (error) {
        throw new UserInputError("Object is invalid");
      }

      const project = await context.prisma.project.findUnique({
        where: {
          id: projectId,
        },
      });

      if (!project) {
        throw new NotFoundError(ErrorConstant.NotFoundMessage);
      }

      return await context.prisma.task.create({
        data: {
          content,
          description,
          projectId,
        },
      });
    },
  });

  export const Update = mutationField("updateTask", {
    type: nonNull("Task"),
    args: {
      id: nonNull(stringArg()),
      content: stringArg(),
      description: stringArg(),
      completed: booleanArg(),
    },
    async resolve(source, args, context, info) {
      const { id, content, description, completed } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError("You have to be logged in");
      }

      const { error } = TaskValidation.validateUpdateTask(args);
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

      return await context.prisma.task.update({
        where: {
          id,
        },
        data: {
          content: content ?? undefined,
          description: description ?? undefined,
          completed: completed ?? undefined,
        },
      });
    },
  });

  export const Delete = mutationField("deleteTask", {
    type: nonNull("Task"),
    args: {
      id: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { id } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError("You have to be logged in");
      }

      const { error } = TaskValidation.validateDeleteTask(args);
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

      return await context.prisma.task.delete({
        where: {
          id,
        },
      });
    },
  });
}

export default TaskMutation;
