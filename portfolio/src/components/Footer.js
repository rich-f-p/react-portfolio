import React from "react";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {SiMedium} from "react-icons/si"

const text ={
    fontFamily: `'Playfair Display SC', serif`,
}
export default function footer(){
    return (
        <footer className="footer mt-3 text-light">
            <div className="container-fluid d-flex justify-content-evenly">
            <h3 style={text}>Richard Ferry Portfolio ©</h3>
            <a href="https://www.linkedin.com/in/richard-ferry-83120514b/"><AiFillLinkedin size={70} /></a>
            <a href="https://github.com/rich-f-p"><AiFillGithub size={70} /></a>
            <a href="https://medium.com/@richardfpro864"><SiMedium size={70}></SiMedium></a>
            </div>
        </footer>
    );
};