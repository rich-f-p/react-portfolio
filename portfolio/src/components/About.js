import React from "react";
import profile from "../images/profile.png"

const sAbout = {
    bg:{
        background: "rgba(0, 0, 0, 0.75)",
        color:"white",
        paddingTop: "5px",
        paddingBottom: "5px",
        fontSize:"150%"
    },
}

export default function about(){
    return(
    <div className="container mb-3 ct-text mt-5">
        <div>
            <img src={profile} style={sAbout.bg} className="img-fluid position-relative top-50 start-50 translate-middle-x rounded-circle" width="500px" height="450px">
            </img>
        </div>
        <p className="mt-3 rounded p-3" style={sAbout.bg}>Full stack web developer with a certificate in full stack web development from  UC Berkeley Extension. 
            Bringing a business background, capable of creating an innovative user experience. With skills in HTML, CSS,  
            JavaScript, and node.js, as well as the ability to meet criteria, provide creative feedback, and work in 
            groups. Key knowledge in creating responsive mobile-first applications that are user friendly, utilized to 
            create a portfolio page, weather dashboard, and continuing to apply is current projects. Capable of 
            utilizing mysql for database development, and utilizing node.js for application use. In a recent project, 
            my role was to utilize Handlebars templating and javascript in order to design a responsive layout that is 
            user friendly. The project is also utilizing express,and express-session so that a user can have a personalized
            account to access certain content. Excited to utilize my skills in additional projects.</p>
    </div>
    )
}