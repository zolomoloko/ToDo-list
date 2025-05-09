import styles from "@/styles/Home.module.css";
import { Form } from "@/components/Form";
import { FilterButton } from "@/components/FilterButton";
import { Task } from "@/components/Task";
import { useState } from "react";
import {Completed} from "@/components/Completed"

 const Home = () => {
  const [taskList, setTaskList] = useState([]); /*buh array length */
  const [filter, setFilter]=useState("all");


  const handleDelete = (id) => {
    const result = taskList.filter((task) => task.id !== id);
    const toDoDel = window.confirm ("Are you sure you want to delete this task?")
    if(!toDoDel) return
    setTaskList(result);
  };

  console.log("taskkkkkk",taskList)
  const toggleCheckBox = (id) => {
    const toggledTask = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(toggledTask)
  };

  const filterdTaskList = taskList.filter((task)=>{
    if (filter === "active" && task.isCompleted === false) {
      return task;
    }
    if (filter === "completed" && task.isCompleted === true) {
      return task;
    }
    if (filter === "all") {
      return task;
    }
  })
  console.log("llll", filterdTaskList)


  const alll =filterdTaskList.length
  console.log(alll)
  const filterNumber = filterdTaskList.filter((check) =>{
     return  check.isCompleted === true
  }).length
  const deleteChecked = ()=> {
    const item = taskList.filter((task) => task.isCompleted !== true)
    const deleteCheckedd = window.confirm ("Are you sure you want to clear all completed tasks?")
    if(!deleteCheckedd) return
    setTaskList(item)
  }
  

  
  

  return (
    <div className={styles.etsegBody}>
      <div className={styles.body}>
        <h1 className={styles.headerText}>To-Do list</h1>
        <Form setTaskList={setTaskList} taskList={taskList} />
        <FilterButton 
          filters={["all", "active", "completed"]} 
          setFilter={setFilter}
          checkedFilter={filter}/>
        {filterdTaskList.map((task, id) => (
          <Task
            key={id}
            task={task}
            removeTaskList={handleDelete}
            ToggleCheckBox={toggleCheckBox}
          />
        ))}
        <Completed 
        numberAll={alll}
        number={filterNumber}
        deleteCheck={deleteChecked}
       />
      </div>
    </div>
  );
};

export default Home;
