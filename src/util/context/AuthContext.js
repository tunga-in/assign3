
import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/firebaseConfig';


export const AuthContext = createContext();


export function AuthContextProvider({children}){
    const [ user, setUser ] = useState(null);
    const [ isLoggedin, setIsLoggedin ] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setIsLoggedin(!!user);
            setUser('firebase user', user);
        });

    }, [user]);


    function logout(){
        const status = firebase.auth().signOut();
        console.log('logout status', status);
    }


    return (
        <AuthContext.Provider
            value={{isLoggedin: isLoggedin, user: user, logout: logout}}
        >
            {children}
        </AuthContext.Provider>
    );
}

