import styles from "@/components/styles/Form.module.css";
export const Task = ({ task, removeTaskList, ToggleCheckBox}) => {
    const handelToggleCheckBox=()=>{
       ToggleCheckBox(task.id)}
  return (
    <div className={styles.task}>
      <div className={styles.checkboxTask}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={handelToggleCheckBox}
        />
        <p style={{ textDecoration: task.isCompleted ? "line-through" : "" }}>
          {task.taskName}
        </p>
      </div>
      <button onClick={() => removeTaskList(task.id)} className={styles.deleteButton}>Delete</button>
    </div>
  );
};
