import React, { createContext, useReducer } from "react";
import { User } from "../types/UserTypes";

export const AuthContext = createContext();

type Action = {
  type: string;
  payload?: any;
};

export const authReducer = (state: User, action: Action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContext State: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
