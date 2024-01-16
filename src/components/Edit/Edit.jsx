import { MdDone , MdOutlineCancel } from "react-icons/md";
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTask } from "../../features/tasks/tasksSlice";
const Edit = ({ task , setIsEdit }) => {
    const taskRef = useRef();
    const dispatch = useDispatch();
    const editHandler = () => {
    }
  return (
    <div className="edit-box">
        <input type="text" defaultValue={task?.title} ref={taskRef}/>
        <MdDone className="accept-edit" onClick={editHandler}/>
        <MdOutlineCancel className="cancel-edit" onClick={()=>setIsEdit(false)}/>
    </div>
  )
}

export default Edit;