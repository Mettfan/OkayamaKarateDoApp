import React from 'react';
import './Login.css'
function Login() {
    let handleLoginSubmit = (e) => {
        e.preventDefault && e.preventDefault()

    }
    return ( <>
        <div className='loginContainer'>
            <h1>Inicia Sesión</h1>
            
            <form className='formContainer' onSubmit={(e)=>{handleLoginSubmit(e)}}>
                <div className='inputGroup'>
                    <label>E-mail</label>
                    <input name='email'/>
                </div>
                <div className='inputGroup'>
                    <label>Contraseña</label>
                    <input name='password' type={'password'}/>
                </div>
                <button className='loginButton' >Login</button>

            </form>

        </div>
    
    
    </> );
}

export default Login;