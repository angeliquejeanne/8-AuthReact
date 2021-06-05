import React from 'react'
import Login from '../../Components/AuthForm/Login'
import SignUp from '../../Components/AuthForm/SignUp'
import Navbar from '../../Components/Navbar/Navbar'
import './Home.css'
import logoleftfont from '../../Assets/images/icon.svg'

export default function Home() {
    return (

        <div className="global-container">
            <Navbar />
            <div className="logo-home">
                <img src={logoleftfont} alt="" />
            </div>
            <div className="content-container">
                <h1 className="part1 part2">
                <span>
                G</span>
                <span>
                R</span>
                <span>
                O</span>
                <span>
                U</span>
                <span>
                P</span>
                <span>
                O</span>
                <span>
                M</span>
                <span>
                A</span>
                <span>
                N</span>
                <span>
                I</span>
                <span>
                A</span>
                </h1>
                <p>Merci de vous connectez pour accéder aux services.</p>
            </div>
            <Login />
            <SignUp />
        </div>
    )
}
