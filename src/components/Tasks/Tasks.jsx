import  { useSelector } from "react-redux"
import Task from "../Task/Task";
import Add from "../Add/Add";


const Tasks = () => {
  const items = useSelector(state => state.tasks.tasks);
  return (
    <div className="tasks-box">
        <div>
            <h1>Task for doing</h1>
        </div>
        <div className="task">
        {
            items?.map((task,index) => (
                <Task key={index} index={index} task={task}/>
            ))
        }
        </div>
        <Add/>
    </div>
  )
}

export default Tasks;
