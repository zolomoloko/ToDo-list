import styles from "@/styles/Home.module.css";
import { Form } from "@/components/Form";
import { FilterButton } from "@/components/FilterButton";
import { Task } from "@/components/Task";
import { useState } from "react";

 const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter]=useState("all");

  const handleDelete = (id) => {
    const result = taskList.filter((task) => task.id !== id);
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

  return (
    <div className={styles.etsegBody}>
      <div className={styles.body}>
        <h1>To-Do list</h1>
        <Form setTaskList={setTaskList} taskList={taskList} />
        <FilterButton 
          filters={["all", "active", "completed"]} 
          setFilter={setFilter}
          checkedFilter={filter}/>
        {taskList.map((task, id) => (
          <Task
            key={id}
            task={task}
            removeTaskList={handleDelete}
            ToggleCheckBox={toggleCheckBox}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
