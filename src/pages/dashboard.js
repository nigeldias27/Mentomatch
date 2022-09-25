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
    setImageslist([{a:'Plant Kingdom Chart',b:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmybiologyresources.com%2Fwp-content%2Fuploads%2F2020%2F04%2FPlant-Classification-.jpg&imgrefurl=https%3A%2F%2Fmybiologyresources.com%2Fcie-resource-bank%2Fcharacteristics-and-classification%2Fclassification%2F1-3-features-of-organisms%2Fthe-5-kingdoms%2Fthe-plant-kingdom%2F&tbnid=Cw1XyYWo0lYKOM&vet=12ahUKEwiolNyIvK_6AhVJFbcAHQjVBEkQMygWegUIARCbAg..i&docid=mjhce0BRQ0vEWM&w=523&h=482&q=plant%20kingdom%20&hl=en-GB&ved=2ahUKEwiolNyIvK_6AhVJFbcAHQjVBEkQMygWegUIARCbAg'},{a:'Animal Kingdom Chart',b:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.edugraphics.net%2Flife-science%2Fposters%2FAnimal_Kingdom_Poster.jpg&imgrefurl=http%3A%2F%2Fwww.edugraphics.net%2Flife-science%2FAnimal_Kingdom_Poster.htm&tbnid=I5Sup7yEdStFnM&vet=12ahUKEwja3aDsu6_6AhXZhNgFHZySDRwQMygMegUIARCAAg..i&docid=-00-noP4f5o4sM&w=533&h=800&q=animal%20kingdom%20science&hl=en-GB&ved=2ahUKEwja3aDsu6_6AhXZhNgFHZySDRwQMygMegUIARCAAg"}]);
    setvideoslist([{a:'Photosynthesis',b:"https://www.youtube.com/watch?v=4cWb7CkiwIY"},{a:'Penguins in Antartica',b:"https://youtu.be/k_s0stxDk9w"}]);
    setarticleslist([{a:'Bryophytes',b:"https://phys.org/news/2022-09-three-dimensional-fossil-algae-million-years.html"},{a:'Mammals',b:"https://www.science.org/content/article/can-wolves-bond-people-dogs-do"}]);
    
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

function c(v){
    window.location.href = `${v}`
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
                            return <div><a onClick={()=>{
                               c(imagestitles.b);
                            }} style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles.a}</a><br></br></div>
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
                            return <div><a onClick={()=>{c(imagestitles.b)}} style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles.a}</a><br></br></div>
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
                            return <div><a onClick={()=>{
                                c(imagestitles.b)
                            }} style={{marginLeft:'100px', paddingTop:'20px'}}>{imagestitles.a}</a><br></br></div>
                        })}
                </div>
                <div style={{width:'75vw',height:'100vh'}}>
                        

                <ul class="nav nav-pills" style={{display:'flex',justifyContent:'center'}}>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Biology</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">English Grammar</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Geometry</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/match"><FaPlus /></Link>
                    </li>
                    
                </ul>
                <div style={{overflowY:'scroll',height:'90vh'}}>
                            <div  style={{display:'flex',marginLeft:'48px',marginTop:'48px',flexDirection:'row',width:'500px',paddingTop:'12px',paddingBottom:'12px',alignItems:'center',borderRadius:'20px',backgroundColor:'#B9F6CA'}}>
                                <img style={{marginLeft:'5px',marginRight:'5px',borderRadius:'50px'}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width={50} height={50} ></img>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <p color="#546E7A">Nigel</p>
                                    <p>Hi! I am the mentor for the group.Excited to start this journey with you</p>
                                </div>
                            </div>


                </div>
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
                            <TaskTodo title="Plant Cell" />
                            <TaskTodo title="Cell Organelles" />
                        </div>
                    </div>
                    <div class="tasks-assigned" style={{width:'25vw',height:'30vh'}}>
                        <div class="label-tasks-heading"><h6>Assigned</h6></div>
                        <div class="assigned-list">
                            <TaskAssigned title="Animal cell" deadline="25/09/2022"/>
                        </div>
                    </div>
                    <div class="tasks-completed" style={{width:'25vw',height:'30vh'}}>
                        <div class="label-tasks-heading"><h6>Completed!</h6></div>
                        <div class="completed-list">
                            <TaskCompleted title="Cells"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;