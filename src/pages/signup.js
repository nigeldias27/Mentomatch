import {useNavigate} from "react-router-dom";
import React,{useState, useEffect} from "react"
import backgroundWhite from "../images/background.png";

function MenteeSignUp(){
    let navigate = useNavigate();
    function clicked(){
        navigate("/interests/"+document.getElementById('signupname').value+"/"+document.getElementById('signupdob').value+"/"+document.getElementById('signuppass').value+"/"+document.getElementById('signupemail').value);
    }
    return(
        <div style={{backgroundImage:`url(${backgroundWhite})`}}>
            <div class="mentee-signup-box">
                <div class="signup-text">SIGN UP</div>

                <div class="input-group mb-3" id="signup-name">
                    <span class="input-group-text" id="basic-addon1">Name</span>
                    <input type="email" class="form-control" id="signupname" aria-label="name" aria-describedby="basic-addon1"></input>
                </div>
                <div class="input-group mb-3" id="signup-email">
                    <span class="input-group-text" id="basic-addon1">@Email</span>
                    <input type="text" class="form-control" id="signupemail" aria-label="Email" aria-describedby="basic-addon1"></input>
                </div>
                <div class="input-group mb-3" id="signup-dob">
                    <span class="input-group-text" id="basic-addon1">Date of Birth</span>
                    <input type="date" class="form-control" id="signupdob" aria-label="phone-number" aria-describedby="basic-addon1"></input>
                </div>

                <div class="input-group mb-3" id="signup-password">
                    <span class="input-group-text" id="basic-addon1">Password</span>
                    <input type="password" class="form-control" id="signuppass" aria-label="password" aria-describedby="basic-addon1"></input>
                </div>
            <button onClick={()=>{clicked()}} type="button" class="btn btn-outline-secondary" id="signin-next-button">Next</button>
            </div>
        </div>
    )
}

export default MenteeSignUp