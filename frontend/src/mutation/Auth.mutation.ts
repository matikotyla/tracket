import { gql } from "@apollo/client";

namespace AuthMutation {
  export const LoginUser = gql`
    mutation Mutation($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        token
      }
    }
  `;

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
