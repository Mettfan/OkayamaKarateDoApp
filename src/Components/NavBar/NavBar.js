import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import OkayamaLogo from '../../Assets/OkayamaLogo.png'
import './NavBar.css'
import ScrollUp from './ScrollUp/ScrollUp';
import SlidingMenu from './SlidingMenu/SlidingMenu';
import TeamOutstanding from './TeamOutstanding.js/TeamOutstanding';
function NavBar() {
    let [state, setState] = useState({
        menuIsActive: false
    })
    let location = useLocation()
    let toggleMenu = ( ) => {
        setState({
            ...state,
            menuIsActive: !state.menuIsActive
        })
        
    }
    return ( <>
        <div className='navContainerBg'>

            <div className='navContainer' >
            <img className='navImageBackground' src='https://www.shutterstock.com/image-photo/power-260nw-78269956.jpg'></img>
                    {/* <img className='okayamaLogoInside' src={OkayamaLogo}/> */}
                    <SlidingMenu menuIsActive = {state.menuIsActive}></SlidingMenu>
                    <img onClick={()=>{toggleMenu()}} className='okayamaLogo' src={OkayamaLogo}/>

    

                <div className='navLinkContainer'>
                    
                    <NavLink className={'navLink'} to={'/'}>
                        Inicio
                    </NavLink>
                    <NavLink className={'navLink'} to={'/location'}>
                        Inscripción
                    </NavLink>
                    <NavLink className={'navLink'} to={'/Productos'}>
                        Productos
                    </NavLink>  

                </div>
                    <div className='pageTitle'>
                        {(location.pathname.split('/')[1] || 'Inicio').toUpperCase()}
                    </div>
                    {/* <TeamOutstanding></TeamOutstanding> */}


            </div>
            <div className='scrollupContainer'>
                <ScrollUp></ScrollUp>
            </div>
        </div>
    
    </> );
}



export default NavBar;