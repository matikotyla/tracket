import { AuthData } from "data";

namespace AuthUtils {
  export const getToken = (): string | null =>
    localStorage.getItem(AuthData.Token);

  export const setToken = (token: string): void =>
    localStorage.setItem(AuthData.Token, token);

  export const removeToken = (): void =>
    localStorage.removeItem(AuthData.Token);

  export const isToken = (): boolean => {
    const token = getToken();
    return !!token;
  };
}

export default AuthUtils;
