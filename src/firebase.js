import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCGl7dxZgpI-wQ75UeAud_mQnuYh2vU0IY",

    authDomain: "authreact-733e6.firebaseapp.com",

    projectId: "authreact-733e6",

    storageBucket: "authreact-733e6.appspot.com",

    messagingSenderId: "880371681274",

    appId: "1:880371681274:web:663490b884d20305738643"
})

export const auth = app.auth()
export default app;