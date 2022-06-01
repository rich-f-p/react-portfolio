import React from "react";
import Resume from "../images/resume.pdf"

const rStyle ={
    height:"100vh",
    width:"90%"
}

export default function resume(){
    return (
        <div className="container-fluid text-center" >
            <iframe src={Resume} style={rStyle}></iframe>
        </div>
    );
};