import { FaExclamation } from "react-icons/fa";
import { MdModeEdit } from 'react-icons/md';
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import { useState } from "react";
const Task = ({ index , task }) => {
    const [isEdit,setIsEdit] = useState(false);
  return (
    <div key={task?.id}>
        <div className="content">
            {
                isEdit
                ?<Edit task={task} index={index} setIsEdit={setIsEdit}/>
                :<p>{task?.title}</p>
            }
        </div>
        <div className="buttons">
            <>
            {
                task?.done
                ?<></>
                :<FaExclamation id="undone-mark"/>
            }
            </>
            <Delete id={task?.id}/>
            <MdModeEdit onClick={()=>setIsEdit(true)} className='edit'/>
        </div>
    </div>
  )
}

export default Task