import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';



function handleClick() {
    let navToggle = document.querySelector(".nav-toggle");
    let navMenu = document.querySelector(".nav-menu");

    navMenu.classList.toggle("nav-menu_visible");
    
}

const NavBar = () => {
    return (

        <div className="nav-container">
            <nav className="nav">
                <a className="logo-nav">Cursos UC</a>
                <button className="nav-toggle" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link ">Cursos</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link ">Universidad Central</a>
                    </li>
                    <li className="nav-menu-item">
                        <a href="#" className="nav-menu-link nav-link "> Nosotros</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar
