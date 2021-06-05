import React from 'react'
import './Navbar.css'
import logoleftfont from '../../Assets/images/logo-monochrome-white.svg'
import { useDispatch } from 'react-redux'

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

    return (
        <nav className="navbar">
            <div className="left">
                <img className="logo" alt="logo" src={logoleftfont} />
            </div>
            <div className="right">
                <button onClick={toggleLogin}>Login</button>
                <button onClick={toggleSignUP}>SignUp</button>
                <button>Déconnexion</button>
            </div>
        </nav>
    )
}
