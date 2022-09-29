import {
  FetchResult,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";
import ProjectTypes from "./Project.types";

namespace TaskTypes {
  export interface Task {
    id: string;
    content: string;
    description: string;
    completed: boolean;
    project: ProjectTypes.Project;
  }

  export interface State {
    tasks: Task[];
  }

  export interface Hook extends State {
    getAll: {
      invoke: LazyQueryExecFunction<GetAll.Response, OperationVariables>;
      loading: boolean;
    };

    create: {
      invoke: (
        options?: MutationFunctionOptions<Create.Response, Create.Request>
      ) => Promise<FetchResult<Create.Response>>;
      loading: boolean;
    };

    update: {
      invoke: (
        options?: MutationFunctionOptions<Update.Response, Update.Request>
      ) => Promise<FetchResult<Update.Response>>;
      loading: boolean;
    };

    delete: {
      invoke: (
        options?: MutationFunctionOptions<Delete.Response, Delete.Request>
      ) => Promise<FetchResult<Delete.Response>>;
      loading: boolean;
    };
  }

  export namespace Get {}

  export namespace GetAll {
    export interface Response {
      tasks: Task[];
    }
  }

  export namespace Create {
    export interface Form {
      content: string;
      description: string;
      project: ProjectTypes.Project;
      // projectId: string;
    }

    export interface Request {
      content: string;
      description: string;
      projectId: string;
    }

    export interface Response {
      createTask: Task;
    }
  }

  export namespace Update {
    export interface Form {
      content: string;
      description: string;
    }

    export interface Request {
      id: string;
      content?: string;
      description?: string;
      completed?: boolean;
    }

    export interface Response {
      updateTask: Task;
    }
  }

  export namespace Delete {
    export interface Request {
      id: string;
    }

    export interface Response {
      deleteTask: Task;
    }
  }
}

export default TaskTypes;
