import { gql } from "@apollo/client";

namespace AuthMutation {
  export const RegisterUser = gql`
    mutation Mutation(
      $email: String!
      $firstName: String!
      $lastName: String!
      $password: String!
    ) {
      registerUser(
        email: $email
        firstName: $firstName
        lastName: $lastName
        password: $password
      ) {
        id
        email
        name
        firstName
        lastName
      }
    }
  `;
}

export default AuthMutation;
