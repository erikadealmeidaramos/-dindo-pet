import { AuthState, AuthActionTypes, AuthAction } from "./types";

const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export function authReducer(
  state = initialState,
  action: AuthAction
): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}