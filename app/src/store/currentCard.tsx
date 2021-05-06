import React, { createContext, useReducer } from "react";

type CurrentCardStoreAction = {
  type: string;
  status: string;
  isFlipped: boolean;
};

type CurrentCardStoreState = {
  index: number;
  status: string;
  isFlipped: boolean;
};

const initialState: CurrentCardStoreState = {
  index: 0,
  status: null,
  isFlipped: false,
};
const CurrentCardStore = createContext(initialState);
const { Provider } = CurrentCardStore;

const CurrentCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: CurrentCardStoreState, action: CurrentCardStoreAction) => {
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

export { CurrentCardStore, CurrentCardProvider };
