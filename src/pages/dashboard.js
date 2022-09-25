import React,{useState, useEffect} from "react"
import Nav from "react-bootstrap/Nav"
import NavbarDashboard from "../components/navbardashboard";
import TaskTodo from "../components/taskTodo";
import TaskAssigned from "../components/taskAssigned";
import TaskCompleted from "../components/taskCompleted";
import { FaVideo, FaImages, FaRegStickyNote, FaPlus } from "react-icons/fa";
import background from "../images/background.png";
import {Link} from "react-router-dom";
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import { MdOutlineAddCircle, MdSend } from "react-icons/md";

function Dashboard(){
    const [images,setImages]=useState(true);
    const [features,setFeatures]=useState(true);
    const [articles,setArticles]=useState(true);
    const [imageslist,setImageslist]=useState([]);
    const [videoslist,setvideoslist]=useState([]);
    const [articleslist,setarticleslist]=useState([]);
    
useEffect(()=>{
    setImageslist(['Calculus sheet','Calculus sheet','Calculus sheet']);
})

function appear(x){
    
    if(x==='images'){
        images?setImages(false):setImages(true);
    }
    else if(x==='videos'){
        features?setFeatures(false):setFeatures(true);
    }
    else{
        articles?setArticles(false):setArticles(true);   
    }
    
}


    return(
        <div style={{backgroundImage:`url(${background})`}}>
            <NavbarDashboard/>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{width:'25vw',height:'100vh'}}>
                    
                    <div onClick={()=>{appear('videos')}} className="resourcesbuttons" style={{display:'flex',justifyContent:'space-between',marginLeft:'40px',marginTop:'45px',borderRadius:'15px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'blue'}}>
                        
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{paddingRight:'15px',paddingLeft:'30px'}}><FaVideo size={30} color={'white'}/></div>
                        <p style={{fontSize:'18px',textAlign:'center',marginBottom:'0px',color:'white'}}> Video</p>
                        </div>
                        <div style={{paddingRight:'12px'}}>
                           {features?<BsFillCaretDownFill color={'white'}/>:<BsFillCaretUpFill color={'white'}/>} 
                        </div>

                        </div>

                        {features?<br></br>:videoslist.map((imagestitles)=>{
                            return <div><a style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles}</a><br></br></div>
                        })}
                        <div onClick={()=>{appear('images')}} className="resourcesbuttons" style={{display:'flex',justifyContent:'space-between',marginLeft:'40px',marginTop:'10px',borderRadius:'15px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'blue'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{paddingRight:'15px',paddingLeft:'30px'}}><FaImages size={30} color={'white'}/></div>
                        <p style={{fontSize:'18px',textAlign:'center',marginBottom:'0px',color:'white'}}> Images</p>
                        </div>
                        <div style={{paddingRight:'12px'}}>
                        {images?<BsFillCaretDownFill color={'white'}/>:<BsFillCaretUpFill color={'white'}/>}
                        </div>
                        </div>
                        {images?<br></br>:imageslist.map((imagestitles)=>{
                            return <div><a style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles}</a><br></br></div>
                        })}

                        <div onClick={()=>{appear('articles')}} className="resourcesbuttons" style={{display:'flex',justifyContent:'space-between',marginLeft:'40px',marginTop:'10px',borderRadius:'15px',paddingTop:'10px',paddingBottom:'10px',backgroundColor:'blue'}}>
                        <div style={{display:'flex',flexDirection:'row'}}>
                        <div style={{paddingRight:'15px',paddingLeft:'30px'}}><FaRegStickyNote size={30} color={'white'}/></div>
                        <p style={{fontSize:'18px',textAlign:'center',marginBottom:'0px',color:'white'}}> Articles</p>
                        </div>
                        <div style={{paddingRight:'12px'}}>
                        {articles?<BsFillCaretDownFill color={'white'}/>:<BsFillCaretUpFill color={'white'}/>}
                        </div>
                        </div>
                        {articles?<br></br>:articleslist.map((imagestitles)=>{
                            return <div><a style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles}</a><br></br></div>
                        })}
                </div>
                <div style={{width:'75vw',height:'100vh'}}>
                <ul class="nav nav-pills" style={{display:'flex',justifyContent:'center'}}>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Group 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Group 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Group 3</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/match"><FaPlus /></Link>
                    </li>
                    
                </ul>
                <div style={{overflowY:'scroll',height:'90vh'}}></div>
                        <div style={{position:'absolute',bottom:'0px',left:'30vw'}}>
                            <button className="btn"><MdOutlineAddCircle size={35}/></button>
                            <input type="text" style={{width:"35vw"}}></input>
                            <button className="btn"><MdSend size={35}/></button>
                        </div>


                </div>
                <div class="task-div" style={{width:'25vw',height:'90vh'}}>
                    <div class="tasks-todo" style={{width:'25vw',height:'30vh'}}>
                        <div class="label-tasks-heading">
                            <div>TODO</div>
                            <div class="add-todo-task-button"><FaPlus /></div>
                        </div>
                        <div class="todo-list">
                            <TaskTodo />
                        </div>
                    </div>
                    <div class="tasks-assigned" style={{width:'25vw',height:'30vh'}}>
                        <div class="label-tasks-heading"><h6>Assigned</h6></div>
                        <div class="assigned-list">
                            <TaskAssigned title="hallo" deadline="25/09/2022"/>
                        </div>
                    </div>
                    <div class="tasks-completed" style={{width:'25vw',height:'30vh'}}>
                        <div class="label-tasks-heading"><h6>Completed!</h6></div>
                        <div class="completed-list">
                            <TaskCompleted title="yaya"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;