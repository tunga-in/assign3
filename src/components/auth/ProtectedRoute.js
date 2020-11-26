
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../util/context/AuthContext';


function ProtectedRoute({component: Component, ...rest}){
    const { isLoggedin } = useContext(AuthContext);
    console.log(isLoggedin)

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedin ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}


export default ProtectedRoute;
