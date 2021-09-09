import React from 'react';
import { Redirect } from 'react-router-dom';

function Val(props){
    const token = localStorage.getItem("token");
    
    if (token !== null) {
        return(<Redirect to={'/'} />);
      }else{
        return(props.children)
    }
    
}


export default Val;