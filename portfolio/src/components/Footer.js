import React from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"

export default function footer(){
    return (
        <footer className="footer mt-auto">
            <div className="container-fluid d-flex justify-content-evenly">
            <h3>Richard Ferry Portfolio ©</h3>
            <a href="https://www.linkedin.com/in/richard-ferry-83120514b/"><AiFillLinkedin size={70} /></a>
            <a href="https://github.com/rich-f-p"><AiFillGithub size={70} /></a>
            </div>
        </footer>
    );
};