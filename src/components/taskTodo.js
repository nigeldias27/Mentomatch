import { propTypes } from "react-bootstrap/esm/Image";
import { MdDone } from "react-icons/md";

function TaskTodo(props){
    return(
        <div class="tasktodo">
            <div class="tasktodotitle">{props.title} </div>
            <div class="tasktodoicon"><MdDone size={"20"}/></div>
        </div>
    )
}

export default TaskTodo