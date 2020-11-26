
import React, { useContext } from 'react';
import { ThemeContext } from '../../util/context/ThemeContext';


function Container({children}){
    const { theme } = useContext(ThemeContext);


    return (
        <div className='n-height' style={theme.container}>
            <div className='container' style={theme.container}>
                <div style={{height:40}}></div>
                    {children}
                <div style={{height:40}}></div>
            </div>
        </div>
    );
}


export default Container;
