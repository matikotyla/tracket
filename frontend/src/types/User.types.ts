namespace UserTypes {
  export interface User {
    id: string;
    email: string;
    name: string;
    firstName: string;
    lastName: string;
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

  export namespace State {
    export interface Context {
      user: User | null;
      loading: boolean;
    }

    export interface Variable {
      user: User | null;
      loading: boolean;
    }

    export interface Hook extends Context {
      setUser: (user: UserTypes.User) => void;
      removeUser: () => void;
      getUser: () => void;
    }
  }
}

export default UserTypes;
