import { useRef, useState } from "react";
import { MdOutlineDoneOutline , MdOutlineCancel } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/tasksSlice";

const Add = () => {
    const [AddTask,setAddTask] = useState(false);
    const dispatch = useDispatch();
    const taskRef = useRef();
    const addTaskHandler = () => {
        let obj = {
            title: taskRef.current.value,
            done:false,
        }
        dispatch(addTask(obj))
        setAddTask(false)
    }
  return (
    <div className="add-box">
        {
            AddTask
            ?
            <div>
                <input type="text" ref={taskRef} />
                <button className="accept-add-task" onClick={addTaskHandler}>
                    <MdOutlineDoneOutline />
                </button>
                <button className="cancel-add-task" onClick={()=>setAddTask(false)}>
                    <MdOutlineCancel />
                </button>
            </div>
            : <button type="button" onClick={()=>setAddTask(true)}>Add Task</button>
        }
    </div>
  )
}

export default Add