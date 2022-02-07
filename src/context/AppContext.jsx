import React, { useReducer, createContext } from "react";

export const AppContext = createContext([]);

const initialState = {
    activeStep: 0,
    data: [
      {
        "symbol": 'A',
        "desc": 'B',
        "unAsset": 'C',
        "markPrice": 'D'
      },
      {
        "symbol": 'E',
        "desc": 'F',
        "unAsset": 'G',
        "markPrice": 'H'
      },
      {
        "symbol": 'I',
        "desc": 'J',
        "unAsset": 'K',
        "markPrice": 'L'
      },
      {
        "symbol": 'M',
        "desc": 'N',
        "unAsset": 'O',
        "markPrice": 'P'
      },
    ]
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
