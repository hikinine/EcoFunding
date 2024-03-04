import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
    const {isAutenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
    
    const [myUser,setMyUser]= useState(null)
    
    useEffect(()=>{
        console.log(`isAutenticated: ${isAutenticated}`);
        console.log(`user: ${user}`);
        console.log(`isLoading: ${isLoading}`);
    }, [isAutenticated] )
}