import { useDispatch } from "react-redux"
import { deleteTask } from "../../features/tasks/tasksSlice";

const Delete = ({ id }) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteTask(id))
    }
    return (
    <span className="delete" onClick={deleteHandler}>&#10060;</span>
  )
}

export default Delete