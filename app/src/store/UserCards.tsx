import React, { createContext, useReducer } from "react";

type UserCardsStoreAction = {
  type: string;
  incomingCards: UserCard[];
  incomingPageStatus: string;
};
type UserCardsStoreState = {
  userCards: UserCard[];
  paginationIndex: number;
  pageStatus: string;
};

const initialState: UserCardsStoreState = {
  userCards: [],
  paginationIndex: 0,
  pageStatus: "reloading",
};
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
        case "SET_PAGE_STATUS":
          return { ...state, pageStatus: action.incomingPageStatus };
        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { UserCardsStore, UserCardsStoreProvider };
