import React, { useContext } from 'react';
import { ThemeContext } from "./ThemeContext";



function MyHeader (props) {
    
  
    const {isDarkMode}= useContext(ThemeContext);
    const mystyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    width: "100%",
    height:"900px"
    };
    return (
      <div style={mystyle}>
      {props.children}
      
      </div>
    );
  }




export default MyHeader
