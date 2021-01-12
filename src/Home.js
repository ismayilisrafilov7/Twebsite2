import Button from "@material-ui/core/Button";
import React, {useContext} from 'react';
import image from "./images/de1ddf9ee30e08e15460626b919ef87e.jpg";
import { Link } from 'react-router-dom';
import {LanguageContext} from "./LanguageContext"



const words={
    azerbaijan:{
        header:"Hoş Gəldiniz",
        contact:"Əlaqə",
        
  
    },
  
    english:{
        header:"Welcome",
        contact:"Contact",
  
  
    }
  
  };

export function Home()  {
    const {language}=useContext(LanguageContext);
    const{header,contact}=words[language]
        const divstyle={
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
            

        }
        return (
            <div style={divstyle}>
                <h1 style={{fontSize:"4rem" ,marginBottom:"3rem",textAlign:"center"}}>{header}</h1>
                <Link to="/formin"><Button style={{fontSize:"1rem"}} variant="contained">{contact} </Button></Link>
            </div>
        )
    }


export default Home
