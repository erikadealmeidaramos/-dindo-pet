import { AuthActionTypes } from "./types";

export const login = (token: string) => ({
  type: AuthActionTypes.LOGIN,
  payload: token,
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});

export type AuthAction =
  | ReturnType<typeof login>
  | ReturnType<typeof logout>;