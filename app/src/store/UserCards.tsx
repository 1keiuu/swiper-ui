import React, { createContext, useReducer } from "react";

type UserCardsStoreAction = {
  type: string;
  incomingCards: UserCard[];
};
type UserCardsStoreState = {
  userCards: UserCard[];
  paginationIndex: number;
};

const initialState: UserCardsStoreState = { userCards: [], paginationIndex: 0 };
const UserCardsStore = createContext(initialState);
const { Provider } = UserCardsStore;

const UserCardsStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: UserCardsStoreState, action: UserCardsStoreAction) => {
      switch (action.type) {
        case "APPEND_CARDS":
          const sum = state.userCards.concat(action.incomingCards);
          return { ...state, userCards: sum };
        case "RESET_CARDS":
          return { ...state, userCards: [] };
        case "INCREMENT_PAGINATION_INDEX":
          return { ...state, paginationIndex: state.paginationIndex + 1 };
        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { UserCardsStore, UserCardsStoreProvider };
