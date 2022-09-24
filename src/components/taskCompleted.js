import { GoVerified } from "react-icons/go";

function TaskCompleted(){
    return(
        <div class="task-completed">
            <div class="task-completed-title">Write blog </div>
            <div class="task-completed-icon"><GoVerified size={"20"}/></div>
        </div>
    )
}

export default TaskCompleted