import React from 'react';
import './IntroCourses.css';
import Image from '../../../../../assets/Education.jpg';

const IntroCourses = () => {
    return (
        <div className='intro-all'>
            <div className='info-intro-container'>
                <h1> Bienvenido a los <br /> Cursos de la Universidad central</h1>
                <p className='subinfo'> Podrá encontrar variedad de cursos. <br /> ¡Esperamos que te guste!
                </p>
            </div>
            <div className="img-intro-container"> 
                <img className='img-intro' src = {Image} alt="Education" />
            </div>
        </div>

    );
};

export default IntroCourses
