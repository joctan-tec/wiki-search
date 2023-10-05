import React, { useState, useEffect } from "react";
import userImage from '../assets/user.png'
import Eye from '../assets/show-password-eye.png';
import NotEye from '../assets/hide-password-eye.png';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    
    const [stateButtom,changeState] = useState(false);
    const navigate = useNavigate();
    const swapPassword = () => {
        changeState(!stateButtom);
    };

    const handleAccess = () => {
        navigate('/search');
    }

    document.title = "Inicio de sesión"

    return(
        <div className="login-screen-view">
            <div className="login-frame">
                <img src={userImage} alt="usuarioImagen" />
                <h1>Login WikiSearch</h1>

                <input type="text" id="email-text" placeholder="Ingrese su correo" autoFocus/>

                <div className="password-space">
                
                    <input type={stateButtom ? "text" : "password"} id="password-input" placeholder="Ingrese su contraseña" required/>
                    <button id="eye-button" type="button" onClick={swapPassword}>
                        <img src={stateButtom ? NotEye: Eye} id="eye-image" alt="Set password visible or not" />
                    </button>
                </div>

                <button className="submit-login" onClick={handleAccess}>
                    Ingresar
                </button>
                <p className="create-account">¿No tenés una cuenta?  
                    <Link to="/register"> Registrate aquí</Link></p>
            </div>
        </div>
        
    );
}