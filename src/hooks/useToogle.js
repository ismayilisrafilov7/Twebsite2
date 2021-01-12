import {useState} from 'react';

function useToogle(initialvalue=false){
    const[state,setState]=useState(initialvalue);
    const toogle=()=>{
        setState(!state)
    }
    return[state,toogle];
}

export default useToogle