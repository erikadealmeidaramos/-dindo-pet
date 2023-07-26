export enum AuthActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
  }
  
  export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
  }
  
  export interface LoginAction {
    type: AuthActionTypes.LOGIN;
    payload: string;
  }
  
  export interface LogoutAction {
    type: AuthActionTypes.LOGOUT;
  }
  
  export type AuthAction = LoginAction | LogoutAction;