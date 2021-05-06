import React, { createContext, useReducer } from "react";

type UserStoreAction = {
  type: string;
  incomingUsers: UserCard[];
};
type UserStoreState = {
  users: UserCard[];
};

const initialState: UserStoreState = { users: [] };
const UserStore = createContext(initialState);
const { Provider } = UserStore;

const UserStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: UserStoreState, action: UserStoreAction) => {
      switch (action.type) {
        case "APPEND_USERS":
          const sum = state.users.concat(action.incomingUsers);
          return { ...state, users: sum };
        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { UserStore, UserStoreProvider };
