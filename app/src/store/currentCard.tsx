import React, { createContext, useReducer } from "react";

const initialState = { index: 0, status: null };

const currentCardStore = createContext(initialState);

const { Provider } = currentCardStore;

type Action = {
  type: string;
  status: string;
};
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action: Action) => {
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
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { currentCardStore, StateProvider };
