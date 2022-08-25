import React from "react";
import './Landing.css'
import coverKarate from '../../Assets/coverKarate.jpg'
import cintasKarate from '../../Assets/Cintas.jpg'
import personKarate from '../../Assets/karatePerson.jpg'
import RightSlideGroup from "./RightSlideGroup/RightSlideGroup";
import LeftSlideGroup from "./LeftSlideGroup/LeftSlideGroup";
export default function Landing (){
    return(<>

        <RightSlideGroup img={personKarate} text={'¿Qué es el Karate?'}></RightSlideGroup>
        <LeftSlideGroup img={cintasKarate} text={'Conoce los Grados'}></LeftSlideGroup>
        <RightSlideGroup img={coverKarate} text={'Únete a Nuestro Equipo de Instructores'} ></RightSlideGroup>
    </>)
}