import React, {useState} from "react";
import { validEmail } from "../utils/helpers";
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

export default function Contact(){

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');

    const inputChange = (e) =>{
        const {target} = e;
        const inputType= target.name;
        const inputVal = target.value;

        if(inputType === 'name'){
            setName(inputVal);
        }else if (inputType === 'email'){
            setEmail(inputVal);
        } else {
            setText(inputVal);
        }
    };

    const submitForm = (e) =>{
        e.preventDefault();
        console.log(name);
        console.log(email);

        if(!validEmail(email)){
            alert('invalid field');
            return;
        }else{
            alert('Thank you!');
            setEmail('');
            setName('');
            setText('');
        };


    }

    return (
        <div className="container mt-3 vh-100" style={sCon.bg}>
            <form>
                <div className="form-group mt-3">
                    <label style={sCon.text}>Name</label>
                    <input value={name}className="form-control" name="name" type='text' onChange={inputChange}  placeholder="Enter Name" />
                </div>
                <div className="form-group mt-3">
                    <label style={sCon.text}>Email</label>
                    <input value={email} name='email' type="email" className="form-control" onChange={inputChange} placeholder="Email" />
                </div>
                <div className="form-group mt-3">
                    <label style={sCon.text}>Please enter details about topic.</label>
                    <textarea value={text} className="form-control mb-3" name='text' type='text' onChange={inputChange} rows="3"></textarea>
                </div>
                <button type="button" className="btn btn-secondary" onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
};
