import React, { createContext, useContext, useReducer } from "react";

type UserCardsAction = {
  type: string;
  payload?: {
    cards?: UserCard[];
    pageStatus?: PageStatus;
  };
};
type UserCardsState = {
  userCards: UserCard[];
  paginationIndex: number;
  pageStatus: PageStatus;
};
type UserCardsDispactch = {
  appendCards: (cards: UserCard[]) => void;
  resetCards: () => void;
  incrementPaginationIndex: () => void;
  setPageStatus: (pageStatus: PageStatus) => void;
};

const initialState: UserCardsState = {
  userCards: [],
  paginationIndex: 0,
  pageStatus: "reloading",
};

const UserCardsStateContext = createContext<UserCardsState>(initialState);

const UserCardsDispatchContext = createContext<UserCardsDispactch>({
  appendCards: () => {},
  resetCards: () => {},
  incrementPaginationIndex: () => {},
  setPageStatus: () => {},
});

export const useUserCardsState = (): UserCardsState => useContext(UserCardsStateContext);
export const useUserCardsDispatch = (): UserCardsDispactch => useContext(UserCardsDispatchContext);

const reducer = (state: UserCardsState, action: UserCardsAction) => {
  const { payload } = action;
  switch (action.type) {
    case "APPEND_CARDS":
      const sum = state.userCards.concat(payload.cards);
      return { ...state, userCards: sum };
    case "RESET_CARDS":
      return { ...state, userCards: [] };
    case "INCREMENT_PAGINATION_INDEX":
      return { ...state, paginationIndex: state.paginationIndex + 1 };
    case "SET_PAGE_STATUS":
      return { ...state, pageStatus: payload.pageStatus };
    default:
      throw new Error();
  }
};

export const UserCardsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const appendCards = (cards: UserCard[]) => {
    dispatch({
      type: "APPEND_CARDS",
      payload: { cards },
    });
  };
  const resetCards = () => {
    dispatch({ type: "RESET_CARDS" });
  };
  const incrementPaginationIndex = () => {
    dispatch({ type: "INCREMENT_PAGINATION_INDEX" });
  };
  const setPageStatus = (pageStatus: PageStatus) => {
    dispatch({ type: "SET_PAGE_STATUS", payload: { pageStatus } });
  };

  return (
    <UserCardsStateContext.Provider value={state}>
      <UserCardsDispatchContext.Provider
        value={{
          appendCards,
          resetCards,
          incrementPaginationIndex,
          setPageStatus,
        }}
      >
        {children}
      </UserCardsDispatchContext.Provider>
    </UserCardsStateContext.Provider>
  );
};
