import React from 'react';
import './LeftSlideGroup.css'
function LeftSlideGroup(props) {
    return ( <>
        <div className="landingContainer">
            <img className="karateCover" src={props.img}/>
            <div className="leyendaCover" ><b>{props.text}</b></div>
        </div>
    
    </>  );
}

export default LeftSlideGroup;