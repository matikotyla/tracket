import { gql } from "@apollo/client";

namespace ProjetQuery {
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

export default ProjetQuery;
