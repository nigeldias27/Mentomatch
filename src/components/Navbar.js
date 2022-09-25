import React,{useState} from "react"
import Nav from "react-bootstrap/Nav"
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
    let navigate = useNavigate();
const [opened,setopened]=useState(false);
function clicked(){
    if(opened){
        setopened(false);
    }
    else{
        setopened(true);
    }
}
return(<div>

        <div class="navbar-elements">
            <div class="nav-left">
                <div class="nav-home"><a>home</a></div>
                <div class="nav-about"><a>about</a></div>
                <div class="nav-contact"><a>contact</a></div>
            </div>
            <div class="nav-right">
                <div class="login-button"><button onClick={()=>{
                    navigate('/signin');
                }}>login</button></div>
            </div>
        </div>

</div>   
)}
export default Navbar