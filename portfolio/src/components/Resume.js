import React from "react";
import Resume from "../images/resume.pdf"

const rStyle ={
    a:{
    height:"90vh",
    width:"90%"
    },
    bg:{
        background: "rgba(0, 0, 0, 0.75)",
        color:"white",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontSize:"150%"
    },
    ul:{
        listStyleType:"none",
    },
}

export default function resume(){
    return (
        <div className="container-fluid text-center" >
            <div>
            <iframe src={Resume} style={rStyle.a}></iframe>
            </div>
            <div className="container text-center rounded effect mt-3" style={rStyle.bg}>
                <h3 >Skills:</h3>
                <ul style={rStyle.ul}>
                    <li>JavaScript</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>Express</li>
                    <li>Responsive-layouts</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Handlebars</li>
                    <li>Teaching capabilities</li>
                </ul>
            </div>
        </div>
    );
};