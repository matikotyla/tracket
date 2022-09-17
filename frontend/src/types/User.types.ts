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
    getUser: () => void;
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
}

export default UserTypes;
