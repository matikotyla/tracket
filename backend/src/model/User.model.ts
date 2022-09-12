import { objectType } from "nexus";

export default objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("email");
    t.nonNull.string("name");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.list.nonNull.field("projects", {
      type: "Project",
      resolve(source, args, context, info) {
        return context.prisma.user
          .findUnique({
            where: { id: source.id },
          })
          .projects();
      },
    });
  },
});
