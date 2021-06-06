import React, {useContext} from 'react'
import SignUp from '../../Components/AuthForm/SignUp'
import Login from '../../Components/AuthForm/Login'
import Navbar from '../../Components/Navbar/Navbar'
import "../Home/Home.css"
import {AuthContext} from '../../Context/AuthContext'

export default function PrivateHome() {

    const {logout} = useContext(AuthContext)

    return (
        <div className="global-container">
            <Navbar />
            <SignUp />
            <Login />
            <div className="content-container" style={{ border: '2px solid grey', justifyContent:'center', marginTop: '25px', padding:'1rem', background: 'lightyellow'}}>
                <>
                    <h1>Voici votre compte privé.</h1>
                    <p>Amusez-vous bien !</p>
                    <button onClick={logout}>Se déconnecter</button>
                </>
                <div className="card-container" style={{ border: '2px solid grey', width: '650px', height: '500px', display:'flex', flexDirection:'column', alignContent:'center', marginTop: '25px', padding:'1rem', background: 'pink'}}>
                    <img src="https://cdn.pixabay.com/photo/2016/06/15/18/57/canada-1459676_960_720.jpg" alt="" width="300" height="180" />
                    <h2>Niagara, Canada</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quam, et minima dignissimos molestiae maxime!</p>
                </div>
            </div>
            
        </div>
    )
}
