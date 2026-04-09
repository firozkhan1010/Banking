import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectsRoute = () => {
    const isLoggin = true;
    if(isLoggin){
        return<Outlet/>;
      

    }else{
        return<Navigate to="/notfound"/>
    }
        

}

export default ProtectsRoute