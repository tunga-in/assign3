
import React from 'react';
import { Card } from 'react-bootstrap';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { APP_NAME } from '../../util/config/constants';
import firebase, { uiConfig } from '../../util/config/firebaseConfig';


function Login(){
    document.title = `${APP_NAME} | Login`;

    return (
        <div className='text-center'>
            <Card
                bg='white'
                text='dark'
                style={{ width: '18rem' }}
                className="n-card"
            >
                <Card.Header>Login to <strong>Notes Center</strong></Card.Header>
                <Card.Body>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.default.auth()}/>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Login;
