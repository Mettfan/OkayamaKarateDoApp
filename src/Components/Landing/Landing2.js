import React from 'react';
import './Landing2.css'
import personKarate from '../../Assets/karatePerson.jpg'
import coverKarate from '../../Assets/coverKarate.jpg'
import cintasKarate from '../../Assets/Cintas.jpg'
import Plan from './Plan/Plan';
import Cinta from './Cinta/Cinta';
import primerKyu from '../../Assets/primerkyu.png'
import segundoKyu from '../../Assets/segundokyu.png'
import tercerKyu from '../../Assets/tercerkyu.png'
import cuartoKyu from '../../Assets/cuartokyu.png'
import quintoKyu from '../../Assets/quintokyu.png'
import sextoKyu from '../../Assets/sextokyu.png'
import septimoKyu from '../../Assets/septimokyu.png'
import octavoKyu from '../../Assets/octavokyu.png'
import novenoKyu from '../../Assets/cintapng.png'
import decimoKyu from '../../Assets/decimokyu.png'
import cintaNegra from '../../Assets/cintanegra.png'
import Feature from './Feature/Feature';
import Extra from './Extra/Extra';
import { useNavigate } from 'react-router-dom';
import karateBaby from '../../Assets/karateBaby.png'
import karateKid from '../../Assets/karateKid.png'
import karateTeen from '../../Assets/karateTeen.png'
import karateAdult from '../../Assets/karateAdult.png'
import desinfeccionPng from '../../Assets/desinfeccion.png'
// import { AiOutlineSmile } from 'react-icons/ai'
import friendlyEnvironment from '../../Assets/friendlyEnvironment.png'
import karateInstructor from '../../Assets/karateInstructor.png'
import dojosPng from '../../Assets/Dojos.png'
import entrenamientoPng from '../../Assets/Entrenamiento.png'
import examenPng from '../../Assets/Examen.png'
import instructorPng from '../../Assets/Instructor.png'
import karateBelt from '../../Assets/belts.png'

function Landing2() {
    let nav = useNavigate()
    return ( <>

        <div className='fading1'></div>
        <div className='coverContainerL2'>
            <img className='coverImgL2' src={coverKarate}/>
            {/* <div className='optionContainer'> */}
                <h3 className='coverText' onClick={() => {nav('/Conocenos')}}>Conócenos</h3>
                <h3 className='coverText2' onClick={() => {nav('/location')}}>Inscríbete</h3>
            {/* </div> */}
            {/* <div className='divisor'></div> */}
        </div>
        <div className='plansTitle'  >
                ¿Quién puede entrenar?
            </div>
        <div className='plansContainerL2'>
            <Plan 
                title = {'Pre-Karate'}
                image = {karateBaby}
                description = {'Si su hijo/a tiene 5 años o menos ¡Este es el grupo perfecto!. Una buena manera de iniciar a su hijo/a en el mundo del Karate-Do'}
                info = {'Permita que nuestros Instructores altamente capacitados mejoren las habilidades Físicas y Cognitivas de su hijo/a con un entrenamiento especializado en pequeños Karatecas que van iniciando su camino en este Arte Marcial'}
            />
            <Plan 
                title = {'Niños/as'}
                image = {karateKid}
                description = {'Especializado en pequeños de desde los 6 años hasta los 12 años'}
                info = {'No pierda la oportunidad de inscribir a su niño/a en nuestro grupo donde hay una mayor interacción con otros alumnos de diversos grados. Una actividad extraescolar que le permitirá desarrollar su disciplina y buenos hábitos de manera constante'}
            />
            <Plan 
                title = {'Jóvenes'}
                image = {karateTeen}
                description = {'No esperes más para integrarte a nuestro grupo de Karatecas, si tienes entre 13 y 20 años ¡Puedes llegar a ser un gran Cinta Negra!'}
                info = {'Intégrese con nosotros y note un mejor desempeño en su condición física y mental. Se adaptará rápidamente a nuestros entrenamientos de la mano de nuestros Instructores altamente capacitados. ¡Si muestra un buen desempeño y carácter puede ser candidato a integrarse a nuestro equipo de Instructores!'}
            />
            <Plan 
                title = {'Adultos'}
                image = {karateAdult}
                description = {'¡Para personas que apuntan a lo alto! Para personas por encima de los 20 años'}
                info = {'Sabemos la importancia de la disciplina en la vida diaria, por eso mismo estamos comprometidos a mostrarle el camino para ser una mejor persona a través de la filosofía y los entrenamientos de alto rendimiento que tenemos preparados para usted'}
            />

        </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                fontSize: 'xx-large',
                fontFamily: 'Lucida Sans'

            }} >
                Conoce Nuestras Cintas
            </div>

        <div className='gradesContainer'>
            <Cinta kyu = '10' image={decimoKyu}  ></Cinta>
            <Cinta kyu = '9' image={novenoKyu}  ></Cinta>
            <Cinta kyu = '8' image={octavoKyu}  ></Cinta>
            <Cinta kyu = '7' image={septimoKyu}  ></Cinta>
            <Cinta kyu = '6' image={sextoKyu}  ></Cinta>
            <Cinta kyu = '5' image={quintoKyu}  ></Cinta>
            <Cinta kyu = '4' image={cuartoKyu}  ></Cinta>
            <Cinta kyu = '3' image={tercerKyu}  ></Cinta>
            <Cinta kyu = '2' image={segundoKyu}  ></Cinta>
            <Cinta kyu = '1' image={primerKyu}  ></Cinta>
            <Cinta dan = '1' image={cintaNegra}  ></Cinta>
        </div>
        <div className='featuresContainer'>
            <Feature 
            title = {'Desinfección Completa'}
            image = {desinfeccionPng}
            description = 'Contamos con Tapete Sanitizante y Gel Antibacterial. Desinfectamos nuestro material de entrenamiento para que usted o su hijo pueda entrenar sin preocupaciones'
            />
            <Feature 
            title = {'Ambiente Amigable y Seguro'}
            image = {friendlyEnvironment}
            description = 'Los alumnos interactuan y realizan ejercicios con otros alumnos de diversos grados. Siempre promovemos la disciplina y el respeto entre ellos'
            />
            <Feature 
            title = {'Instructores Capacitados'}
            image = {karateInstructor}
            description = 'Trabajamos día con día para mejorar las habilidades de nuestro Staff y así usted pueda recibir el mejor entrenamiento mientras nosotros lo guíamos en su camino a Cinta Negra'
            />
        </div>
        
        <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                fontSize: 'xx-large',
                fontFamily: 'Lucida Sans'

            }} >
                Conocenos más
            </div>
        <div className='extrasContainer'>
            <Extra
                image={dojosPng}
                text = {'Dojos'}
                redirect= {'/location'}
                ></Extra>
            <Extra
                image={entrenamientoPng}
                text = {'Entrenamiento'}
                redirect= {'/training'}
                ></Extra>
            <Extra
                image={instructorPng}
                text = {'Instructores'}
                redirect= {'/sensei'}
                ></Extra>
            <Extra
                image={karateBelt}
                text = {'Grados'}
                redirect= {'/grades'}
                ></Extra>
            <Extra
                image={examenPng}
                text = {'Examen'}
                redirect= {'/examination'}
            ></Extra>
        </div>
    
    </> );
}

export default Landing2;