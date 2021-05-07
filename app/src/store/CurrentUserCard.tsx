// NOTE: 現在表示中のcardの状態
import React, { createContext, useReducer } from "react";

type CurrentUserCardStoreAction = {
  type: string;
  status: string;
  isFlipped: boolean;
};

type CurrentUserCardStoreState = {
  index: number;
  status: string;
  isFlipped: boolean;
};

const initialState: CurrentUserCardStoreState = {
  index: 0,
  status: null,
  isFlipped: false,
};
const CurrentUserCardStore = createContext(initialState);
const { Provider } = CurrentUserCardStore;

const CurrentUserCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: CurrentUserCardStoreState, action: CurrentUserCardStoreAction) => {
      switch (action.type) {
        case "INCREMENT_INDEX":
          return { ...state, index: state.index + 1 };
        case "DECREMENT_INDEX":
          return { ...state, index: state.index - 1 };
        case "CHANGE_STATUS":
          return { ...state, status: action.status };
        case "SET_IS_FLIPPED":
          return { ...state, isFlipped: action.isFlipped };
        case "TOGGLE_IS_FLIPPED":
          return { ...state, isFlipped: !state.isFlipped };
        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CurrentUserCardStore, CurrentUserCardProvider };
