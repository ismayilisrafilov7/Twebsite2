import React, {createContext } from "react";
import useToogle from "./hooks/useToogle"

export const ThemeContext = createContext();

export function ThemeProvider (props){

     const[isDarkMode,toggleTheme]= useToogle(false)
    
        return(
            <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {props.children}
            </ThemeContext.Provider>
            
            
            )


    }



