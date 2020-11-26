
import React, { useContext, useEffect, useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import {Switch, View} from 'react-native-web';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../util/context/ThemeContext';
import { getCurrUser } from '../../util/data/user';
import Container from '../layout/Container';


function Profile(){
    const [user, setUser] = useState({});
    const {lightTheme, theme, setLightTheme} = useContext(ThemeContext);


    useEffect(() => {
        function init(){
            let user = getCurrUser();
            console.log(user)
            setUser(user);
        }


        init();

    },[])

    return (
        <Container>
            <Jumbotron style={theme.note}>
                <h5>PROFILE</h5>
                <hr/>
                <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight: 20}}><label className='mr-20 n-upper'>Full Name:</label></View>
                    <View><p>{user.displayName}</p></View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight: 20}}><label className='mr-20 n-upper'>Email:</label></View>
                    <View><p>{user.email}</p></View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight: 20}}><label className='mr-20 n-upper'>Phone:</label></View>
                    <View><p>{user.phone}</p></View>
                </View>


                <div style={{height: 60 }}></div>

                <h5>SETTINGS</h5>
                <hr/>
                <View style={{flexDirection:'row'}}>
                    <View style={{paddingRight: 20}}><label htmlFor='switch' className='mr-20'>Light Theme</label></View>
                    <View><Switch id='switch' value={lightTheme} onValueChange={val => setLightTheme(val)}/></View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Link to='/edit_profile'>Edit Profile</Link>
                </View>
            </Jumbotron>
        </Container>
    );
}


export default Profile;
