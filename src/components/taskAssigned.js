import { BsArrowBarUp } from "react-icons/bs";

function TaskAssigned(){
    return (
        <div class="assigned-task">
            <div class="assigned-task-left">
                <div class="assigned-task-title">Read 100 pages</div>
                <div class="assigned-deadline">
                    <div class="assigned-deadline-text">Deadline: </div>
                    <div class="assigned-deadline-date">42/09/69</div>
                </div>
            </div>
            <div class="assigned-task-icon"><BsArrowBarUp size={"25"}/></div>
        </div>
    )
}

export default TaskAssigned