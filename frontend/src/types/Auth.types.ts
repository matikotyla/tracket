namespace AuthTypes {
  export namespace Login {}

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
}

export default AuthTypes;
