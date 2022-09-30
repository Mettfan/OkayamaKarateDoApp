import React from 'react';
import './Landing2.css'
import personKarate from '../../Assets/karatePerson.jpg'
import coverKarate from '../../Assets/coverKarate.jpg'
import cintasKarate from '../../Assets/Cintas.jpg'
import Plan from './Plan/Plan';


function Landing2() {
    return ( <>
    
        <div className='coverContainerL2'>
            <img className='coverImgL2' src={coverKarate}/>
        </div>

        <div className='plansContainerL2'>
            <Plan 
                title = {'Pre-Karate'}
                image = {personKarate}
                description = {'Si su hijo/a tiene 5 años o menos ¡Este es el grupo perfecto!. Una buena manera de iniciar a su hijo/a en el mundo del Karate-Do'}
                info = {'Permita que nuestros Instructores altamente capacitados mejoren las habilidades Físicas y Cognitivas de su hijo/a con un entrenamiento especializado en pequeños Karatecas que van iniciando su camino en este Arte Marcial'}
            />
            <Plan 
                title = {'Niños/as'}
                image = {personKarate}
                description = {'Especializado en pequeños de desde los 6 años hasta los 12 años'}
                info = {'No pierda la oportunidad de inscribir a su niño/a en nuestro grupo donde hay una mayor interacción con otros alumnos de diversos grados. Una actividad extraescolar que le permitirá desarrollar su disciplina y buenos hábitos de manera constante'}
            />
            <Plan 
                title = {'Jóvenes'}
                image = {personKarate}
                description = {'No esperes más para integrarte a nuestro grupo de Karatecas, si tienes entre 13 y 20 años ¡Puedes llegar a ser un gran Cinta Negra!'}
                info = {'Intégrese con nosotros y note un mejor desempeño en su condición física y mental. Se adaptará rápidamente a nuestros entrenamientos de la mano de nuestros Instructores altamente capacitados. ¡Si muestra un buen desempeño y carácter puede ser candidato a integrarse a nuestro equipo de Instructores!'}
            />
            <Plan 
                title = {'Adultos'}
                image = {personKarate}
                description = {'¡Para personas que apuntan a lo alto! Para personas por encima de los 20 años'}
                info = {'Sabemos la importancia de la disciplina en la vida diaria, por eso mismo estamos comprometidos a mostrarle el camino para ser una mejor persona a través de la filosofía y los entrenamientos de alto rendimiento que tenemos preparados para usted'}
            />

        </div>
        
    
    </> );
}

export default Landing2;