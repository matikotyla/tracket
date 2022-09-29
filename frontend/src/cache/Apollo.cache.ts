import { FieldMergeFunction, InMemoryCache } from "@apollo/client";
import { CacheTypes } from "types";

export default new InMemoryCache({
  typePolicies: {
    Mutation: {
      fields: {
        createProject: {
          merge(_, incoming: CacheTypes.Item, { cache }) {
            cache.modify({
              fields: {
                projects(existing: CacheTypes.Item[] = []) {
                  return [...existing, incoming];
                },
              },
            });
            return incoming;
          },
        },
        // updateProject: {
        //   merge(_, incoming, { cache }) {
        //     cache.modify({
        //       fields: {
        //         projects(existing = []) {
        //           console.log(incoming);
        //           console.log(existing);
        //           return existing;
        //         },
        //       },
        //     });
        //   },
        // },
        deleteProject: {
          merge(_, incoming: CacheTypes.Item, { cache }) {
            cache.modify({
              fields: {
                projects(existing: CacheTypes.Item[] = []) {
                  return existing.filter(
                    (item) => item.__ref !== incoming.__ref
                  );
                },
              },
            });
          },
        },
        createTask: {
          merge(_, incoming: CacheTypes.Item, { cache }) {
            cache.modify({
              fields: {
                tasks(existing: CacheTypes.Item[] = []) {
                  return [...existing, incoming];
                },
              },
            });
            return incoming;
          },
        },
        deleteTask: {
          merge(_, incoming: CacheTypes.Item, { cache }) {
            cache.modify({
              fields: {
                tasks(existing: CacheTypes.Item[] = []) {
                  return existing.filter(
                    (item) => item.__ref !== incoming.__ref
                  );
                },
              },
            });
          },
        },
      },
    },
  },
});
