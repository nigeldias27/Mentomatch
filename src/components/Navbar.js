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
<div className="customnav_container">
    <a className="navbar-brand d-flex align-items-center">
        <h1 className="customnav-item">Mentomatch</h1></a>
        <div className={"customnavbar-nav ms-auto customdir"}>
            <div className="customnav-item"><a className="nav-link" style={{color:'black'}}>Home</a></div>
            <div className="customnav-item"><a className="nav-link" style={{color:'black'}}>Stay</a></div>
            <div className="customnav-item"><a className="nav-link" style={{color:'black'}}>Conferences &amp; Business</a></div>
            <div className="customnav-item"><a className="nav-link" style={{color:'black'}}>Dining</a></div>
            <div className="customnav-item"><a className="nav-link" style={{color:'black'}}>Contact Us</a></div>
        </div>

</div>
</Nav>
</div>)   
}
export default Navbar