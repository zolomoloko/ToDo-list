 import styles from "@/components/styles/Form.module.css"
export const Completed = ({number, numberAll, deleteCheck}) => {
    if(!number && !numberAll){
        return <p className={styles.tooldog}>No tasks yet. Add one above!</p>
    }
    return (
        
        <div className={styles.pButton}>
            <p className={styles.tooldog}>
                {number} of {numberAll} tasks Completed
            </p>
            <button onClick={deleteCheck} className={styles.deleteButton}>Clear Completed</button>
        </div>
    )
}