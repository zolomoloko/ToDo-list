// import styles from "@/components/styles/Form.module.css"
export const Completed = ({number, numberAll, deleteCheck}) => {
    if(!number && !numberAll){
        return <p>No tasks yet. Add one above!</p>
    }
    return (
        
        <div>
            <p>
                {number} of {numberAll} tasks Completed
            </p>
            <button onClick={deleteCheck}>Clear Completed</button>
        </div>
    )
}