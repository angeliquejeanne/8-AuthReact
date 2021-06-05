import React, {useRef, useState, useContext} from 'react'
import './AuthForm.css'
import { useSelector, useDispatch } from 'react-redux'
import { AuthContext } from '../../Context/AuthContext'
import { useHistory } from 'react-router-dom'

export default function SignUp() {

    const [error, setError] = useState('')
    const history = useHistory();
    const {signup} = useContext(AuthContext)

    const showModal = useSelector(state => state)
    
    const dispatch = useDispatch()

    const closeModal = () => {
        dispatch({
            type: "CLOSEMODAL"
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if(inputs.current[1].value !== inputs.current[2].value){
            setError("Les mots de passe ne sont pas identiques")
            return;
        }

        await signup(inputs.current[0].value, inputs.current[1].value);
        // history.push("/loggedHome");
        dispatch({
            type: "CLOSEMODAL"
        })

        inputs.current.forEach(inp => {
            inp.value = "";
        })
        setError("")
    }

    const inputs = useRef([])

    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    
    return (
        <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>

            <div onClick={closeModal} className="overlay"></div>
            
            <div className="container-modal">
                <form 
                    onSubmit={handleSubmit} 
                    className="form-auth"
                >
                    <h2>INSCRIPTION</h2>

                    <label htmlFor="mail">Votre mail</label>
                    <input type="mail" ref={addInputs} htmlFor="mail" required />

                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" ref={addInputs} id="password" required />

                    <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
                    <input type="password" ref={addInputs} id="confirm-password" required />

                    {error}

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