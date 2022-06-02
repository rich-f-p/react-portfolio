import React from "react";
const sCon = {
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

export default function contact(){
    return (
        <div className="container mt-3 vh-100" style={sCon.bg}>
            <form>
                <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="name" className="form-control" id="exampleInputEmail1"  placeholder="Enter Name" />
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group mt-3">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
    );
};
