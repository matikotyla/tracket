namespace AuthTypes {
  export namespace Login {
    export interface Form {
      email: string;
      password: string;
    }

    export interface Request {
      email: string;
      password: string;
    }

    export interface Response {
      loginUser: {
        token: string;
      };
    }
  }

  export namespace Register {
    export interface Form {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
      approval: boolean;
    }

    export interface Request {
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    }

    export interface Response {
      __typename: string;
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      password: string;
    }
  }

  export namespace State {
    export interface Context {
      authenticated: boolean;
    }

    export interface Hook extends Context {
      signIn: (token: string) => void;
      signOut: () => void;
    }
  }
}

export default AuthTypes;
