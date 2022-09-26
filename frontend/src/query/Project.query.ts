import { gql } from "@apollo/client";

namespace ProjectQuery {
  export const Get = gql`
    query Query {
      projects {
        id
        name
        color
      }
    }
  `;
}

export default ProjectQuery;
