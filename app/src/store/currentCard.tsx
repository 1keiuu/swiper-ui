import React, { createContext, useReducer } from "react";

type CurrentCardStoreAction = {
  type: string;
  status: string;
};
type CurrentCardStoreState = {
  index: number;
  status: string;
};

const initialState: CurrentCardStoreState = { index: 0, status: null };
const CurrentCardStore = createContext(initialState);
const { Provider } = CurrentCardStore;

const CurrentCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state: CurrentCardStoreState, action: CurrentCardStoreAction) => {
      switch (action.type) {
        case "INCREMENT_INDEX":
          return { ...state, index: state.index + 1, status: state.status };
        case "DECREMENT_INDEX":
          return { ...state, index: state.index - 1, status: state.status };
        case "CHANGE_STATUS":
          return { ...state, index: state.index, status: action.status };
        default:
          throw new Error();
      }
    },
    initialState
  );
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CurrentCardStore, CurrentCardProvider };
