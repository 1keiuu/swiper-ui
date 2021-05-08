// NOTE: 現在表示中のcardの状態
import React, { createContext, useContext, useReducer } from "react";

type CurrentUserCardAction = {
  type: string;
  payload?: {
    status?: string;
    isFlipped?: boolean;
  };
};
type CurrentUserCardState = {
  index: number;
  status: string;
  isFlipped: boolean;
};
type CurrentUserCardDispatch = {
  incrementIndex: () => void;
  decrementIndex: () => void;
  changeStatus: (status: string) => void;
  setIsFlipped: (isFlipped: boolean) => void;
  toggleIsFlipped: () => void;
};

const initialState: CurrentUserCardState = {
  index: 0,
  status: "",
  isFlipped: false,
};

const CurrentUserCardStateContext = createContext<CurrentUserCardState>(
  initialState
);
const CurrentUserCardDispatchContext = createContext<CurrentUserCardDispatch>({
  incrementIndex: () => {},
  decrementIndex: () => {},
  changeStatus: () => {},
  setIsFlipped: () => {},
  toggleIsFlipped: () => {},
});

export const useCurrentUserCardStateContext = () =>
  useContext(CurrentUserCardStateContext);

export const useCurrentUserCardDispatchContext = () =>
  useContext(CurrentUserCardDispatchContext);

const reducer = (
  state: CurrentUserCardState,
  action: CurrentUserCardAction
) => {
  const payload = action.payload;
  switch (action.type) {
    case "INCREMENT_INDEX":
      return { ...state, index: state.index + 1 };
    case "DECREMENT_INDEX":
      return { ...state, index: state.index - 1 };
    case "CHANGE_STATUS":
      return { ...state, status: payload.status };
    case "SET_IS_FLIPPED":
      return { ...state, isFlipped: payload.isFlipped };
    case "TOGGLE_IS_FLIPPED":
      return { ...state, isFlipped: !state.isFlipped };
    default:
      throw new Error();
  }
};

export const CurrentUserCardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementIndex = () => {
    dispatch({ type: "INCREMENT_INDEX" });
  };
  const decrementIndex = () => {
    dispatch({ type: "DECREMENT_INDEX" });
  };
  const changeStatus = (status: string) => {
    dispatch({ type: "CHANGE_STATUS", payload: { status: status } });
  };
  const setIsFlipped = (isFlipped: boolean) => {
    dispatch({ type: "SET_IS_FLIPPED", payload: { isFlipped: isFlipped } });
  };
  const toggleIsFlipped = () => {
    dispatch({ type: "TOGGLE_IS_FLIPPED" });
  };

  return (
    <CurrentUserCardStateContext.Provider value={state}>
      <CurrentUserCardDispatchContext.Provider
        value={{
          incrementIndex,
          decrementIndex,
          changeStatus,
          setIsFlipped,
          toggleIsFlipped,
        }}
      >
        {children}
      </CurrentUserCardDispatchContext.Provider>
    </CurrentUserCardStateContext.Provider>
  );
};
