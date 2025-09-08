
import { useSelector } from 'react-redux'
import { removeTask, closeModifiy, openModifiy, modifiyTask, doneUnDone } from "../taskSlice";
import { useDispatch } from "react-redux";

import { useState } from 'react';

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
    <div className='flex justify-center items-center  flex-col' >
      <button onClick={() => { setFilterCondtion(!filterCondtion) }}>filter</button>{

        tasks.filter(task => task.isDone == filterCondtion).map(task => (

          <div className='border-4 w-90 mt-14 border-fuchsia-800' key={task.id}>
            {
              task.modifiy ? (
                <div>
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                  <button onClick={() => { modifiyhandler(task, inputValue); modifiyHandlerClose(task); }}>Save</button>

                </div>
              ) : (
                <div className='border-4  border-b-fuchsia-800'>
                  <p>{task.description}</p>
                  {!task.isDone ? (<p>is done</p>) : (<p>is not done</p>)}
                  <button className='m-5' onClick={() => { modifiyHandlerOpen(task); }}>modify</button>
                  <button className='m-5' onClick={() => removeHandler(task)}>delete</button>
                  {task.isDone ? (<button className='m-5' onClick={() => doneUnDoneHandler(task)}>done</button>) : (<button className='m-5' onClick={() => doneUnDoneHandler(task)}>unDone</button>)}
                </div>
              )}
          </div>
        ))
      }
    </div>
  )
}





