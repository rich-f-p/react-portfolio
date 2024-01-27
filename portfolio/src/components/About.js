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
        <p className="mt-3 rounded p-3" style={sAbout.bg}>Meet an innovative Full Stack Web Developer with a 
        certificate in Full Stack Web Development from UC Berkeley Extension, blending a strong business 
        background with a passion for creating cutting-edge user experiences. Proficient in HTML, CSS, 
        JavaScript, and node.js, I not only meet project criteria but also inject creativity and thrive 
        in collaborative group environments.<br></br><br></br>
        Specializing in crafting responsive mobile-first applications, I've successfully built a diverse 
        portfolio showcasing projects like a dynamic weather dashboard and an interactive portfolio page. 
        I consistently apply and expand my skills in ongoing projects, ensuring I stay at the forefront of the 
        latest web development trends.<br></br><br></br>
        In the realm of database development, I wield MySQL with finesse, and my expertise extends to leveraging 
        node.js for seamless application integration. In a recent project, I played a pivotal role in utilizing 
        Handlebars templating and JavaScript to design a responsive layout that offers an exceptionally 
        user-friendly experience. This project incorporates express and express-session to provide users with 
        personalized accounts for accessing exclusive content.<br></br><br></br>
        Eager to contribute my skills and creativity to future projects, I am a dynamic and forward-thinking Full 
        Stack Web Developer, ready to tackle challenges and bring a unique perspective to any team.
        </p>
    </div>
    )
}