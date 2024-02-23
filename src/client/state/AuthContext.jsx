import { createContext, useReducer, userReducer } from "react";

const initialState = {
  userId: null,
  username: null,
};

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          userId: action.payload.id,
          username: action.payload.username,
        };
      case "LOGOUT":
        return initialState;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
