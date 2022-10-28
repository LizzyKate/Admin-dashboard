import { createContext, useContext, useState } from "react";

const Context = createContext();

const initialState = {
    chat: false,
    cart: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const handleClick = (clicked) => {
        setIsClicked({ ...isClicked, [clicked]: true });
    }
    return(
        <Context.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize}}>{children}</Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context);
}