
import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/firebaseConfig';
import { getCurrUser, saveUser } from '../data/user';


export const AuthContext = createContext();


export function AuthContextProvider({children}){
    const [ user, setUser ] = useState(null);
    const [ isLoggedin, setIsLoggedin ] = useState(false);


    useEffect(() => {
        async function init(){
            let currUser = await getCurrUser();

            firebase.auth().onAuthStateChanged((user) => {
                user && saveUser(
                    {
                        id: user.uid,
                        displayName: user.displayName,
                        email: user.email,
                        phone: user.phoneNumber,
                    }
                );

                setUser(user);
                
            });

            setIsLoggedin(!!currUser);
            setUser(user);
        }

        init();

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

