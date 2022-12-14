import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import okayamaLogo from "../../../Assets/OkayamaLogo.png"
import professorLeg from '../../../Assets/professorLegUp.jpg'
import cintasKarate from '../../../Assets/Cintas.jpg'
import cintaNegra from '../../../Assets/cintapng.png'
import { useNavigate } from 'react-router-dom';


function Carousel() {
    let nav = useNavigate()
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 2000,
       
      }
    return ( <>
    
    <Slider {...settings} >

    <div className="sliderContainer">

        <div className="slide" onClick={()=>{nav('/location')}} >
        <img className="imgCarousel" src={okayamaLogo}   />
        <h1>Encuentra tu Dojo más cercano</h1>
        </div>
    </div>
    <div className="sliderContainer">

        <div className="slide"  onClick={()=>{nav('/Conocenos')}}>
        <img className="imgCarousel" src={professorLeg}   />
        <h1>Miranos Entrenar</h1>
        </div>
    </div>
    <div className="sliderContainer">

        <div className="slide"  >
        <img className="imgCarousel" src={cintaNegra}  onClick={()=>{nav('/info')}} />
        <h1>¿Quién Puede Practicar Karate?</h1>
        </div>
    </div>



</Slider>
    
    </> );
}

export default Carousel;