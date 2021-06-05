import React, {useRef, useState} from 'react'
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { AuthContext } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function Login() {

    const showModal = useSelector(state => state)

    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    return (
        <div className={showModal.showLogin ? "global-modal" : "hide-modal"}>

            <div onClick={closeModal} className="overlay"></div>
            
            <div className="container-modal">
                <form className="form-auth">
                    <h2>CONNEXION</h2>

                    <label htmlFor="mail">Votre mail</label>
                    <input type="mail" htmlFor="mail" required />

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" required />

                    <button className="btn-login">Connexion</button>
                </form>
                <button onClick={closeModal} className="btn-close">x</button>
                <p className="bottom-help-txt">
                    Besoin de créer un compte ?
                </p>
            </div>
        </div>
    )
}
