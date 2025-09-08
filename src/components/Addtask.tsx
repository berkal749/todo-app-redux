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
      <div>
        <input type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => {  addHandler(inputValue)}}>add</button>





      </div>
    )
  }
