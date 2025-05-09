import styles from "@/components/styles/Form.module.css"
import { useState } from "react";

export const Form = ({setTaskList, taskList}) => {
  const [inputValue, setInputValue] = useState("");

  const changeText = (event) => {
    setInputValue(event.target.value);
  };
  const handleAdd = () => {
    const newTask = {
        id: new Date(),
        taskName: inputValue,
        isCompleted: false,
    }; 
    if(newTask.taskName === ""){
      return alert("Please enter a task!")
    }
    
    setTaskList([...taskList, newTask]);
    setInputValue("");
  };
    return (
      <div>
            <input 
              value={inputValue}
              className={styles.formInput} 
              placeholder="Add a new task..." 
              onChange={changeText}
            />
            <button className={styles.formBotton} onClick={handleAdd}>Add</button>
      </div>
    );

};