import { objectType } from "nexus";

export default objectType({
  name: "Task",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("content");
    t.nonNull.string("description");
    t.nonNull.boolean("completed");
    t.field("project", {
      type: "Project",
      resolve(source, args, context, info) {
        return context.prisma.task
          .findUnique({
            where: { id: source.id },
          })
          .project();
      },
    });
  },
});
