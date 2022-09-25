import { BsArrowBarUp } from "react-icons/bs";

function TaskAssigned(props){
    function alertTitle(){
        alert(props.description);
    }
    return (
        <div class="assigned-task" onClick="alertTitle()">
            <div class="assigned-task-left">
                <div class="assigned-task-title">{props.title}</div>
                <div class="assigned-deadline">
                    <div class="assigned-deadline-text">Deadline: </div>
                    <div class="assigned-deadline-date">{props.deadline}</div>
                </div>
            </div>
            <div class="assigned-task-icon"><BsArrowBarUp size={"25"}/></div>
        </div>
    )
}

export default TaskAssigned