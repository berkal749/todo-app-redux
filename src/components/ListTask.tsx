import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { removeTask, closeModifiy, openModifiy, modifiyTask } from "../taskSlice";
import { useDispatch } from "react-redux";


export default function ListTask() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.task.tasks);


  const [inputValue, setInputValue] = useState<string>("");


  function removeHandler(targetTask) {
    if (targetTask) {
      dispatch(removeTask(targetTask));
    }
  }
  // function addHandler(targetTask) {
  //   if (targetTask) {
  //     dispatch(addTask(targetTask));
  //   }
  // }
  function modifiyHandlerClose(task) {
    dispatch(closeModifiy(task));
  }
  function modifiyhandler(task, description) {
    dispatch(modifiyTask({
      id: task.id,
      description: description
    }));
  }


  function modifiyHandlerOpen(task) {
    dispatch(openModifiy(task));
  }

  return (
    <div >  {

      tasks.map(task => (

        <div className='border-4' key={task.id}>
          {
            task.modifiy ? (
              <div>
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={() => { modifiyhandler(task, inputValue); modifiyHandlerClose(task); }}>Save</button>
              </div>
            ) : (
              <div>
                <p>{task.description}</p>
                <button onClick={() => { modifiyHandlerOpen(task); }}>modify</button>
                <button onClick={() => removeHandler(task)}>delete</button>
              </div>
            )}
        </div>
      ))
    }
    </div>
  )
}





