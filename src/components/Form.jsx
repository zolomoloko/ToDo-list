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
  const handleKeyDown =(event) =>{
    if (event.key === "Enter"){
      handleAdd ()
    }
  }
    return (
      <div className={styles.inputButton}>
            <input 
              value={inputValue}
              className={styles.formInput } 
              placeholder="Add a new task..." 
              onChange={changeText}
              onKeyDown={handleKeyDown}
            />
            <button className={styles.formBotton} onClick={handleAdd}>Add</button>
      </div>
    );

};