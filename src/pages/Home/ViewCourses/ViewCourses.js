import React from 'react'
import NavBar from '../../components/NavBar/NavBar';
import Course from './components/Courses/Course';
import IntroCourses from './components/IntroC/IntroCourses';

const ViewCourses = () => {
    return (
        <>
            <NavBar title='Cursos UC' />
            <IntroCourses />
            <Course />
        </>
    )
}

export default ViewCourses
