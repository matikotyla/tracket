namespace AuthTypes {
  export interface TokenPayload {
    userId: string;
    iat: number;
    exp: number;
  }
}

export default AuthTypes;
