import React, { useReducer } from 'react'

const MainContext = React.createContext()

const initialState = {
  queryMap: new Map(),
  coordinatesMap: new Map()
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'addQuery':
      return {
        ...state,
        queryMap: this.queryMap.set(action.newHexa)
      };
    case 'addCoordinates':
      return {
        ...state,
        coordinatesMap: this.coordinatesMap.set(action.newCoor) 
      }

    default:
      return state;
  }
};

export const MainProvider = ({children}) =>(
  <MainContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MainContext.Provider>
);


export const MainConsumer = MainContext.Consumer

export default MainContext
