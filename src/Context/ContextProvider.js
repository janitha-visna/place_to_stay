import React, { createContext, useContext, useReducer } from 'react'
import reducer from './reducer'

const intialState = {
    currentUser:null,
    openLogin:false,
}

const Context = createContext(intialState)

export const useValue = () =>{
    return useContext (Context)
};

const ContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,intialState)
  return (
    <Context.Provider value={{state,dispatch}}>{children}</Context.Provider>
    
  );
};

export default ContextProvider;
