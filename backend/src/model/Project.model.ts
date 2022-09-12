import { list, nonNull, objectType } from "nexus";

export default objectType({
  name: "Project",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("color");
    t.field("user", {
      type: "User",
      resolve(source, args, context, info) {
        return context.prisma.project
          .findUnique({
            where: { id: source.id },
          })
          .user();
      },
    });
    t.field("tasks", {
      type: list("Task"),
      async resolve(source, args, context, info) {
        // return await context.prisma.task.findMany({
        //   where: {
        //     projectId: source.id,
        //   },
        // });

        return await context.prisma.project
          .findUnique({
            where: { id: source.id },
          })
          .tasks();

        // const tasks = await context.prisma.project
        //   .findUnique({
        //     where: { id: source.id },
        //   })
        //   .tasks();

        // console.log(tasks);

        // return tasks ?? [];
      },
    });
  },
});
