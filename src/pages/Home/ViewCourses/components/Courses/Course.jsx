import React from 'react'
import Card from '../../../../components/Card/Card';
import './Course.css';

const Course = () => {
    return (
        <div className="wrapper">
            <Card
                img="https://cdn.pixabay.com/photo/2019/12/21/20/44/math-work-4711302_960_720.jpg"
                title=" Matematicas"
                description="Matematicas Basicas para reforzar"
                price="50.000" />

            <Card
                img="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg"
                title=" Español"
                description="El Universo es grande pero la historia es infinita"
                price="40.000" />

            <Card
                img="https://cdn.pixabay.com/photo/2015/04/20/13/30/kitchen-731351_960_720.jpg"
                title=" Cocina"
                description="Aprende cosas nuevas e impresiona a tus familiares"
                price="60.000" />

            <Card
                img="https://cdn.pixabay.com/photo/2017/09/07/10/07/english-2724442_960_720.jpg"
                title=" Ingles"
                description="do you want to improve your english well this is your course"
                price="90.000" />

        </div>
    )
}

export default Course
