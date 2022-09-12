import { AuthenticationError, UserInputError } from "apollo-server";
import { ErrorConstant } from "constant";
import { NotFoundError } from "error";
import { mutationField, nonNull, stringArg } from "nexus";
import { ProjectValidation } from "validation";

namespace ProjectMutation {
  export const Create = mutationField("createProject", {
    type: nonNull("Project"),
    args: {
      name: nonNull(stringArg()),
      color: nonNull("Color"),
    },
    async resolve(source, args, context, info) {
      const { name, color } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      const { error } = ProjectValidation.validateCreateProject(args);
      if (error) {
        throw new UserInputError(ErrorConstant.UserInputMessage);
      }

      return await context.prisma.project.create({
        data: {
          name,
          color,
          userId,
        },
      });
    },
  });

  export const Update = mutationField("updateProject", {
    type: nonNull("Project"),
    args: {
      id: nonNull(stringArg()),
      name: stringArg(),
      color: "Color",
    },
    async resolve(source, args, context, info) {
      const { id, name, color } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError(ErrorConstant.AuthenticationMessage);
      }

      const { error } = ProjectValidation.validateUpdateProject(args);
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

      return await context.prisma.project.update({
        where: {
          id,
        },
        data: {
          name: name ?? undefined,
          color: color ?? undefined,
        },
      });
    },
  });

  export const Delete = mutationField("deleteProject", {
    type: nonNull("Project"),
    args: {
      id: nonNull(stringArg()),
    },
    async resolve(source, args, context, info) {
      const { id } = args;
      const { userId } = context;

      if (!userId) {
        throw new AuthenticationError("You have to be logged in");
      }

      const { error } = ProjectValidation.validateDeleteProject(args);
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

      // return await context.prisma.project.delete({
      //   where: {
      //     id,
      //   },
      // });

      const [, deletedProject] = await context.prisma.$transaction([
        context.prisma.task.deleteMany({
          where: {
            projectId: id,
          },
        }),
        context.prisma.project.delete({
          where: {
            id,
          },
        }),
      ]);

      return deletedProject;
    },
  });
}

export default ProjectMutation;
