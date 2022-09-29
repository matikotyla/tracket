import { gql } from "@apollo/client";

namespace TaskMutation {
  export const CreateTask = gql`
    mutation Mutation(
      $content: String!
      $description: String!
      $projectId: String!
    ) {
      createTask(
        content: $content
        description: $description
        projectId: $projectId
      ) {
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

  export const UpdateTask = gql`
    mutation UpdateTask(
      $id: String!
      $content: String
      $description: String
      $completed: Boolean
    ) {
      updateTask(
        id: $id
        content: $content
        description: $description
        completed: $completed
      ) {
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

  export const DeleteTask = gql`
    mutation Mutation($id: String!) {
      deleteTask(id: $id) {
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

export default TaskMutation;
