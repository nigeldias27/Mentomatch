import React,{useState} from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
function Navbar() {
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
<Nav className="navbar navbar-light navbar-expand-md-py-3">
<div className="nav_container">
    <a className="navbar-brand d-flex align-items-center">
        <h1 className="nav-item">Mentomatch</h1></a>
        <div className={opened?"navbar-nav ms-auto dir opened container":"navbar-nav ms-auto dir"}>
            <div className="nav-item"><a className="nav-link">Home</a></div>
            <div className="nav-item"><a className="nav-link" >Stay</a></div>
            <div className="nav-item"><a className="nav-link" >Conferences &amp; Business</a></div>
            <div className="nav-item"><a className="nav-link" >Dining</a></div>
            <div className="nav-item"><a className="nav-link" >Contact Us</a></div>
        </div>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2" onClick={clicked}><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
</div>
</Nav>
</div>)   
}
export default Navbar