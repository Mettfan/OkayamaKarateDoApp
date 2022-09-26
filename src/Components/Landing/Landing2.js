import React from 'react';
import './Landing2.css'
import personKarate from '../../Assets/karatePerson.jpg'
import coverKarate from '../../Assets/coverKarate.jpg'
import cintasKarate from '../../Assets/Cintas.jpg'


function Landing2() {
    return ( <>
    
        <div className='landingGridContainer'>
            <div className='cover'>
                
                <img className='coverimg' src={coverKarate}></img>
            </div>
            <div className='sectionA'>
                
                <img className='coverimgSectionA' src={personKarate}></img>
                <div className='h1'>
                    <h1 >
                        h1
                    </h1>

                </div>
            </div>
            <div className='sectionb'>
                
                <img className='coverimgSectionB' src={cintasKarate}></img>
                <div className='h2'>
                    <h1 >
                        h2
                    </h1>

                </div>
            </div>
        </div>
    
    </> );
}

export default Landing2;