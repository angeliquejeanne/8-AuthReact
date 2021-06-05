import React, {useRef, useState} from 'react'
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux'

export default function SignUp() {

    const showModal = useSelector(state => state)
    
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>

            <div onClick={closeModal} className="overlay"></div>
            
            <div className="container-modal">
                <form className="form-auth">
                    <h2>INSCRIPTION</h2>

                    <label htmlFor="mail">Votre mail</label>
                    <input type="mail" htmlFor="mail" required />

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" required />

                    <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
                    <input type="password" id="confirm-password" required />

                    <button className="btn-sign-up">Inscription</button>
                </form>
                <button onClick={closeModal} className="btn-close">x</button>
                <p className="bottom-help-txt">
                    Vous avez déjà un compte ?
                </p>
            </div>
        </div>
    )
}