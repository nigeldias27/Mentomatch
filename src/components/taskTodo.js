import { propTypes } from "react-bootstrap/esm/Image";
import { MdDone } from "react-icons/md";

function TaskTodo(props){
/*
    return(
        <div class="tasktodo">
            <div class="tasktodotitle">{props.title} </div>
            <div class="tasktodoicon"><MdDone size={"20"}/></div>
        </div>
    )
    */
return(
    <div style={{display:"flex",marginTop:'5px',padding:'5px 0px 0px 5px',width:'24vw',justifyContent:'space-between',backgroundColor:'blue',color:'white',marginLeft:'5px',marginRight:'5px',borderRadius:'10px'}}>
        <div><h6>{props.title}</h6></div>
        <div style={{marginRight:'8px'}}><MdDone size={"20"}/></div>
    </div>)
}

export default TaskTodo