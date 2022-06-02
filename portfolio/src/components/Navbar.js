import React from "react";

const sNav = {
    text:{
    color: "white",
    fontSize: "150%", 
    },
    bg:{
        background: "rgba(0, 0, 0, 0.75)",
        color:"white",
        paddingTop: "5px",
        paddingBottom: "5px",
    }
} 

export default function navbar({ currentPage, handlePageChange }){
    return (
        <div style={sNav.bg}>
            <div className="container-fluid d-flex text-center justify-content-evenly">
            <a className="navbar-brand" style={sNav.text} href="#">Richard Ferry</a>
            </div>
            <nav className="navbar d-flex justify-content-evenly">
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? ' active' : 'nav-link '}style={sNav.text}>About Me</a>
                <a href="#project"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? ' active ' : 'nav-link'}style={sNav.text}>Portfolio</a>
                <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? ' active' : 'nav-link'}style={sNav.text}>Resume</a>
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? ' active' : 'nav-link'}style={sNav.text}>Contact</a>
            </nav>
        </div>
    );
};

