import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { removeTask, closeModifiy, openModifiy, modifiyTask, doneUnDone } from "../taskSlice";
import { useDispatch } from "react-redux";



export default function ListTask() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.task.tasks);


  const [inputValue, setInputValue] = useState<string>("");
  const [filterCondtion, setFilterCondtion] = useState<boolean | undefined>(true);



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
  function doneUnDoneHandler(isDone) {
    dispatch(doneUnDone(isDone));
  }





  function modifiyHandlerOpen(task) {
    dispatch(openModifiy(task));
  }


  return (
    <div >
      <button onClick={() => { setFilterCondtion(!filterCondtion) }}>filter</button>{

        tasks.filter(task => task.isDone == filterCondtion).map(task => (

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
                  {task.isDone ? (<p>is done</p>) : (<p>is not done</p>)}
                  <button onClick={() => { modifiyHandlerOpen(task); }}>modify</button>
                  <button onClick={() => removeHandler(task)}>delete</button>
                  {task.isDone ? (<button onClick={() => doneUnDoneHandler(task)}>done</button>) : (<button onClick={() => doneUnDoneHandler(task)}>unDone</button>)}
                </div>
              )}
          </div>
        ))
      }
    </div>
  )
}





