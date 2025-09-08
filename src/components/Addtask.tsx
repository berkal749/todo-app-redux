import type React from 'react';
import { useState } from 'react'
import { addTask } from "../taskSlice";
import { useDispatch } from "react-redux";





  
  export default function Addtask() {
    const dispatch = useDispatch();
    function addHandler(description) {
    if (description) {
    dispatch(addTask(description));
  }
  }
    const [inputValue, setInputValue] = useState<string>("");
    return (
      <div className='flex flex-col  justify-center items-center mt-6'>
        <input type="text"
         className=' border-fuchsia-800 border-4'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => {  addHandler(inputValue)}}>add</button>





      </div>
    )
  }
