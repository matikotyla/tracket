import { FieldMergeFunction, InMemoryCache } from "@apollo/client";
import { ProjectQuery, TaskQuery } from "query";
import { CacheTypes, ProjectTypes, TaskTypes } from "types";

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
          merge(
            _,
            incoming: CacheTypes.Item,
            {
              cache,
              field,
              fieldName,
              args,
              variables,
              isReference,
              toReference,
            }
          ) {
            cache.modify({
              fields: {
                projects(existing: CacheTypes.Item[] = []) {
                  return existing.filter(
                    (item) => item.__ref !== incoming.__ref
                  );
                },
                tasks(existing: CacheTypes.Item[]) {
                  // const items = cache.readQuery<{ tasks: TaskTypes.Task[] }>({
                  //   query: TaskQuery.GetAll,
                  // });
                  // console.log(existing);
                  // console.log(items);
                  // console.log(incoming);
                  // console.log(
                  //   items?.tasks.filter(
                  //     (task) => `Project:${task.project.id}` !== incoming.__ref
                  //   )
                  // );
                  // console.log(existing.filter(({__ref}) => _ref === `${}`))
                  // TODO: remove all tasks associated with the deleted project
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
