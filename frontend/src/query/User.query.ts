import { gql } from "@apollo/client";

namespace UserQuery {
  export const Get = gql`
    query Query {
      user {
        id
        email
        name
        firstName
        lastName
      }
    }
  `;
}

export default UserQuery;
