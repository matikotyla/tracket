import {
  FetchResult,
  LazyQueryExecFunction,
  MutationFunctionOptions,
  OperationVariables,
} from "@apollo/client";

namespace UserTypes {
  export interface User {
    id: string;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
  }

  export interface State {
    user: User | null;
    loading: boolean;
  }

  export interface Hook extends State {
    setUser: (user: UserTypes.User | null) => void;
    removeUser: () => void;
    getUser: LazyQueryExecFunction<UserTypes.Get.Response, OperationVariables>;
    update: {
      invoke: (
        options?: MutationFunctionOptions<Update.Response, Update.Request>
      ) => Promise<FetchResult<Update.Response>>;
      loading: boolean;
    };
  }

  export namespace Get {
    export interface Response {
      user: {
        id: string;
        email: string;
        name: string;
        firstName: string;
        lastName: string;
      };
    }
  }

  export namespace Update {
    export interface Form {
      name: string;
      firstName: string;
      lastName: string;
    }

    export interface Request {
      name?: string;
      firstName?: string;
      lastName?: string;
    }

    export interface Response {
      id: string;
      email: string;
      name: string;
      firstName: string;
      lastName: string;
    }
  }
}

export default UserTypes;
