import React from 'react';
import { Redirect } from 'react-router-dom';

function Auth(props){
    const token = localStorage.getItem("token");
    if (token === null) {
        return(<Redirect to={'/login'} />);
      }else{
        return(props.children)
    }
    
}


export default Auth;