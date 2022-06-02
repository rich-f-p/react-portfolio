import React from "react";
import Main from "../images/bookspot.png";
import Note from "../images/notepad.jpg";
import Pwa from "../images/pwa.png";

const portS = {
    fontSize: "150%",
    color: "white",
}

export default function project(){
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <a style={portS} href="https://aqueous-plateau-74718.herokuapp.com/">Live</a>
                    <a style={portS} href="https://github.com/rich-f-p/book-spot">Repo</a>
                </div>
                <img className="img-fluid w-100" src={Main} alt="bootspot" />
            </div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <a style={portS} href="https://quiet-oasis-75616.herokuapp.com/">Live</a>
                    <a style={portS} href="https://github.com/rich-f-p/note-pad">Repo</a>
                </div>
                <img className="img-fluid w-100" src={Note} alt="notepad" />
            </div>
            <div className="container">
                <div className="d-flex justify-content-between">
                    <a style={portS} href="https://glacial-shore-56837.herokuapp.com/">Live</a>
                    <a style={portS} href="https://github.com/rich-f-p/pwa-text-editor">Repo</a>
                </div>
                <img className="img-fluid w-100" src={Pwa} alt="Text-editor" />
            </div>

        </div>
    );
};