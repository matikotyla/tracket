import { gql } from "@apollo/client";

namespace TaskQuery {
  export const GetAll = gql`
    query Query {
      tasks {
        id
        content
        description
        completed
        project {
          id
          name
          color
        }
      }
    }
  `;
}

export default TaskQuery;
