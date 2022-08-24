import React from "react";
import './Landing.css'
import coverKarate from '../../Assets/coverKarate.jpg'
import RightSlideGroup from "./RightSlideGroup/RightSlideGroup";
import LeftSlideGroup from "./LeftSlideGroup/LeftSlideGroup";
export default function Landing (){
    return(<>
        <div className="landingContainer">
            <div className="leyendaCover" ><b>Únete a Nuestro Equipo de Instructores</b></div>
            <img className="karateCover" src={coverKarate}/>
        </div>
        <RightSlideGroup img={coverKarate} text={'Únete a Nuestro Equipo de Instructores'}></RightSlideGroup>
        <LeftSlideGroup img={coverKarate} text={'Únete a Nuestro Equipo de Instructores'} ></LeftSlideGroup>
    </>)
}