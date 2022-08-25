import React from 'react';
import './Register.css'
function Register() {
    let handleRegisterSubmit = (e) => {
        e.preventDefault && e.preventDefault()

    }
    return ( <>
        <div className='registerContainer'>
            <h1>Regístrate</h1>
            
            <form className='formContainer' onSubmit={(e)=>{handleRegisterSubmit(e)}}>
                <div className='inputGroup'>
                    <label>E-mail</label>
                    <input name='email'/>
                </div>
                <div className='inputGroup'>
                    <label>Contraseña</label>
                    <input name='password' type={'password'}/>
                </div>
                <div className='inputGroup'>
                    <label>Confirmar Contraseña</label>
                    <input name='confirmPassword' type={'password'}/>
                </div>
                <button className='registerButton' >Register</button>

            </form>

        </div>
    
    
    </> );
}

export default Register;