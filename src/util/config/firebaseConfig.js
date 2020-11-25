
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCxH0TBK-DOs0MQZ4lQJSIf4Fr8BqNv5Js",
    authDomain: "guma-app-6c8dc.firebaseapp.com",
    databaseURL: "https://guma-app-6c8dc.firebaseio.com",
    projectId: "guma-app-6c8dc",
    storageBucket: "guma-app-6c8dc.appspot.com",
    messagingSenderId: "372468027436",
    appId: "1:372468027436:web:be6cb53e46e48ea6c2c189"
};


firebase.initializeApp(firebaseConfig);


export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ]
};


export default firebase;
