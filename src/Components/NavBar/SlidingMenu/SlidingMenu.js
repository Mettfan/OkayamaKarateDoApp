import React from 'react';
import { NavLink } from 'react-router-dom';
import './SlidingMenu.css'
function SlidingMenu(props) {
    
    return ( <>
        <div className={'menuContainer' + String(props.menuIsActive) }>
           
            <NavLink className={'navLinkMenu'} to={'/Conocenos'}>Conocenos</NavLink>
            <NavLink className={'navLinkMenu'} to={'/Inscripcion'}>Inscripcion</NavLink>
            <NavLink className={'navLinkMenu'} to={'Productos'}>Productos</NavLink>


        </div>
    
    
    </> );
}

export default SlidingMenu;