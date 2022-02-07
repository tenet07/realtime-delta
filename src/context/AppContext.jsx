import React, { useReducer, createContext } from "react";

export const AppContext = createContext([]);

const initialState = {
    activeStep: 0,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STEP":
        return {
            ...state,
            activeStep: action.activeStep + 1
        };

    default:
        return {
            ...state
        };
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
