
import React, { createContext, useEffect, useState } from 'react';


export const ThemeContext = createContext();


const light = {
    container: {
        backgroundColor: '#fff',
        color: '#222',
    },
    note: {
    },
    input: {},
};


const dark = {
    container: {
        backgroundColor: '#323d35',
        color: '#fff',
    },
    note: {
        backgroundColor: '#30593b',
        color: '#ccc',
    },
    input: {
        backgroundColor: '#ddd',
    }
}


export default function ThemeContextProvider({children}){
    const [lightTheme, setLightTheme] = useState(true);
    const [theme, setTheme] = useState(light);

    useEffect(() => {
        function init(){
            let localTheme = localStorage.getItem('@lightTheme');
            localTheme = localTheme? JSON.parse(localTheme): true;

            if(localTheme === true){
                setTheme(light);
                setLightTheme(true);
    
            } else {
                setTheme(dark);
                setLightTheme(false);
            }
        }

        init();

    }, [])


    const handleTheme = (status) => {
        localStorage.setItem('@lightTheme', JSON.stringify(status));
        if(status === true){
            setTheme(light);
            setLightTheme(true);

        } else {
            setTheme(dark);
            setLightTheme(false);
        }
    }


    return (
        <ThemeContext.Provider
            value={{lightTheme: lightTheme, theme: theme, setLightTheme: handleTheme}}
        >
            {children}
        </ThemeContext.Provider>
    )
}
