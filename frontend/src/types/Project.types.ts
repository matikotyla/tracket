import {
  ApolloError,
  FetchResult,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  MutationTuple,
  OperationVariables,
} from "@apollo/client";
import StylesTypes from "./Styles.types";

namespace ProjectTypes {
  export enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue",
    Yellow = "yellow",
  }

  export interface Project {
    id: string;
    name: string;
    color: StylesTypes.Color;
  }

  export interface State {
    loading: boolean;
    projects: Project[];
  }

  export interface Hook extends State {
    getProjects: {
      invoke: LazyQueryExecFunction<Get.Response, OperationVariables>;
      loading: boolean;
      error?: ApolloError;
    };

    create: {
      invoke: (
        options?: MutationFunctionOptions<Create.Response, Create.Request>
      ) => Promise<FetchResult<Create.Response>>;
      loading: boolean;
      error?: ApolloError;
    };

    update: {
      invoke: (
        options?: MutationFunctionOptions<Update.Response, Update.Request>
      ) => Promise<FetchResult<Update.Response>>;
      loading: boolean;
      error?: ApolloError;
    };

    delete: {
      invoke: (
        options?: MutationFunctionOptions<Delete.Response, Delete.Request>
      ) => Promise<FetchResult<Delete.Response>>;
      loading: boolean;
      error?: ApolloError;
    };
  }

  export namespace Get {
    export interface Response {
      projects: Project[];
    }
  }

  export namespace Create {
    export interface Form {
      name: string;
      color: StylesTypes.Color;
    }

    export interface Request {
      name: string;
      color: StylesTypes.Color;
    }

    export interface Response {
      createProject: {
        id: string;
        name: string;
        color: StylesTypes.Color;
      };
    }
  }

  export namespace Update {
    export interface Form {
      name: string;
      color: StylesTypes.Color;
    }

    export interface Request {
      id: string;
      name?: string;
      color?: StylesTypes.Color;
    }

    export interface Response {
      updateProject: {
        id: string;
        name: string;
        color: StylesTypes.Color;
      };
    }
  }

  export namespace Delete {
    export interface Request {
      id: string;
    }

    export interface Response {
      deleteProject: {
        id: string;
        name: string;
        color: StylesTypes.Color;
      };
    }
  }
}

export default ProjectTypes;
