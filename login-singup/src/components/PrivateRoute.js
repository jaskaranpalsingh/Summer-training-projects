import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({logIn , children}) => {
    if(logIn){
        return children;
    }
    else{
        return <Navigate to={'/login'} />
    }
}

export default PrivateRoute
