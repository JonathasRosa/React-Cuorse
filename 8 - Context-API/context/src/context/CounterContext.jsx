/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
//1 - Criar Context
import { createContext, useState } from "react"

// eslint-disable-next-line no-undef
export default CounterContext = createContext();

//2 - Criar Provider
export const CounterContextProvider = ({children}) => {
    const [counter, setCounter] = useState(5);
    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};