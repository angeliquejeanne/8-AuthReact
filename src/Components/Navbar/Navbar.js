import React, {useContext} from 'react'
import './Navbar.css'
import logoleftfont from '../../Assets/images/logo-monochrome-white.svg'
import { useDispatch } from 'react-redux'
import {AuthContext} from '../../Context/AuthContext'

export default function Navbar() {

    const dispatch = useDispatch()

    const toggleLogin = () => {
        dispatch({
            type: "TOGGLEIN"
        })
    }
    const toggleSignUP = () => {
        dispatch({
            type: "TOGGLEUP"
        })
    }
    const {logout} = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div className="left">
                <img className="logo" alt="logo" src={logoleftfont} />
            </div>
            <div className="right">
                <button onClick={toggleLogin}>Login</button>
                <button onClick={toggleSignUP}>SignUp</button>
                <button onClick={logout}>Déconnexion</button>
            </div>
        </nav>
    )
}
