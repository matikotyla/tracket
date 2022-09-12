import {
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
  stringArg,
} from "nexus";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const Link = objectType({
//   name: "Link",
//   definition(t) {
//     t.nonNull.string("id");
//     t.nonNull.string("description");
//     t.nonNull.string("url");
//     t.field("user", {
//       type: "User",
//       resolve(parent, args, context) {
//         return context.prisma.link
//           .findUnique({ where: { id: parent.id } })
//           .user();
//       },
//     });
//   },
// });

// export const LinkQuery = queryField("feed", {
//   type: nonNull(list(nonNull("Link"))),
//   async resolve(parent, args, context, info) {
//     return context.prisma.link.findMany();
//   },
// });

// export const LinkMutation = mutationField("add", {
//   type: "Link",
//   args: {
//     description: nonNull(stringArg()),
//     url: nonNull(stringArg()),
//   },
//   resolve(parent, args, context) {
//     const { description, url } = args;
//     const { userId } = context;

//     if (!userId) {
//       throw new Error("Cannot post without logging in.");
//     }

//     const newLink = context.prisma.link.create({
//       data: {
//         description,
//         url,
//         user: { connect: { id: userId } },
//       },
//     });

//     return newLink;
//   },
// });
