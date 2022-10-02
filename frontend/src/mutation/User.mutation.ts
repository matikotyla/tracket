import { gql } from "@apollo/client";

namespace UserMutation {
  export const UpdateUser = gql`
    mutation Mutation($name: String, $firstName: String, $lastName: String) {
      updateUser(name: $name, firstName: $firstName, lastName: $lastName) {
        id
        email
        name
        firstName
        lastName
      }
    }
  `;
}

export default UserMutation;
