import { gql } from "@apollo/client";

namespace ProjectMutation {
  export const CreateProject = gql`
    mutation Mutation($name: String!, $color: Color!) {
      createProject(name: $name, color: $color) {
        id
        name
        color
      }
    }
  `;

  export const UpdateProject = gql`
    mutation Mutation($id: String!, $name: String, $color: Color) {
      updateProject(id: $id, name: $name, color: $color) {
        id
        name
        color
      }
    }
  `;

  export const DeleteProject = gql`
    mutation Mutation($id: String!) {
      deleteProject(id: $id) {
        id
        name
        color
      }
    }
  `;
}

export default ProjectMutation;
