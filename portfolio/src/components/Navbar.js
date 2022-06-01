import React from "react";


export default function navbar({ currentPage, handlePageChange }){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-secondary d-flex justify-content-around">
                <a className="text-light navbar-brand" href="#">Richard Ferry</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active text-white' : 'nav-link text-white'}>About Me</a>
                </li>
                <li className="nav-item">
                <a href="#project"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a>
                </li>
                <li className="nav-item">
                <a href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                </li>
                <li className="nav-item">
                <a href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                </li>
            </ul>
            </div>
            </nav>
        </div>
    );
};

