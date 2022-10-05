import React from 'react';
import './Extra.css'
import { useNavigate } from 'react-router-dom'
function Extra(props) {
    let nav = useNavigate()
    return ( <>


        <div className='extraContainer' onClick={() => {nav(props.redirect)}}>
            
            <img className='extraImage' src={props.image} />
            <div className='extraText'>
                {props.text}
            </div>

        </div>


    </> );
}

export default Extra;