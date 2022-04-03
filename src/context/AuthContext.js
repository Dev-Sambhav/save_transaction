import { createContext, useReducer, useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

// reducer function
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload, isAuthReady: true };
    case "SIGNUP":
      return { user: action.payload, isAuthReady: true };
    case "LOGOUT":
      return { ...state, user: null };
    case "IS_AUTH_READY":
      return { user: action.payload, isAuthReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthReady: false,
  });
  console.log(state);
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "IS_AUTH_READY", payload: user });
      unsub();
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
