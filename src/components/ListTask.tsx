import React from 'react'
import { useSelector } from 'react-redux'

import { removeTask } from "../taskSlice";
import { useDispatch } from "react-redux";


export default function ListTask() {
    const dispatch = useDispatch();
    const tasks = useSelector((state:any) => state.task.tasks);

    function removeHandler(targetTask) {
    if (targetTask) {

      dispatch(removeMovie(targetTask));
    }
  }




  return (
    <div>
{tasks.map(task => <div key={task.id}>

<p>{task.description}</p>
<p> status:{task.isDone}</p>


<button value={task.id} onClick={() => (removeHandler(task.id))
        }>delete button</button>

</div>)}


    </div>
  )
}
