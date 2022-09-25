import React,{useState} from "react"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom";
import {AiFillSetting} from 'react-icons/ai'
function NavbarDashboard(){
    const [opened,setopened]=useState(false);
    
    return(
        <div>
            <Nav className="navbar navbar-light navbar-expand-md-py-3">
<div className="customnav_container">
    <a className="navbar-brand d-flex align-items-center">
        <h1 className="customnav-item">Mentomatch</h1></a>
        <div className={"customnavbar-nav ms-auto customdir"}>
            <div className="customnav-item"><Link to={'/profile/'+JSON.parse(localStorage.getItem('userinfo'))[1]['name']}><a className="nav-link"><img src="https://flxt.tmsimg.com/assets/p195303_n309258_cc_v9_aa.jpg" style={{borderRadius:'50%',width:'50px',height:'50px'}}></img></a></Link></div>
            <div className="customnav-item"><AiFillSetting size={30}/></div>
        </div>

</div>
</Nav>
        </div>
    )
}

export default NavbarDashboard;