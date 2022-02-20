import React from "react";
import { useQueryClient } from "react-query";
import { getMeKey } from "../../graphql/keys/key";

type authProviderProps = {
  children: React.ReactNode;
};

export interface AuthContextType {
  isAuthenticated: boolean;
  setAuthState(): void;
  resetAuthState(): void;
}

const context: AuthContextType = {
  isAuthenticated: false,
  setAuthState: () => {},
  resetAuthState: () => {},
};

// enum ActionType {
//   Set = "SET",
//   Reset = "RESET",
// }

// type Action = {
//   type: ActionType;
//   payload: any;
// };

// const reducer = (state: AuthContextType, action: Action): AuthContextType => {
//   switch (action.type) {
//     case ActionType.Set:

//       return state;
//     case ActionType.Reset:
//       return state;
//     default:
//       return state;
//   }
// };

//   const [state,dispatch] = React.useReducer(
//     reducer,
//     context
//   );

export const AuthContext = React.createContext<AuthContextType>(context);

const AuthProvider: React.FC<authProviderProps> = ({
  children,
}): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const setAuthState = () => {
    setIsAuthenticated(true);
  };

  const resetAuthState = () => {
    setIsAuthenticated(false);
  };

  React.useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setAuthState();
    } else {
      resetAuthState();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthState,
        resetAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
