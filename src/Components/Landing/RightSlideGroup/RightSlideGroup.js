import React from 'react';
import './RightSlideGroup.css'
import coverKarate from '../../../Assets/coverKarate.jpg'
function RightSlideGroup(props) {
    return ( <>
        <div className="landingContainer">
            <div className="leyendaCover" ><b>{props.text}</b></div>
            <img className="karateCover" src={props.img}/>
        </div>
    
    </>  );
}

export default RightSlideGroup;