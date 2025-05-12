 import styles from "@/components/styles/Form.module.css"
export const FilterButton = ({filters, setFilter, checkedFilter}) => {
  const chooseFilter = (list)=>{
    setFilter(list);
  };

  return (
    <div className={styles.buttonguud}>
      {filters.map((list) => (
        <button 
        onClick={()=> chooseFilter(list)} 
        style={{
          padding:"10px 20px",
          borderRadius:"15px", 
          border:"none",
          cursor:"pointer",
          boxShadow:
          checkedFilter === list
          ? "5px 5px 10px rgba(255, 255, 255, 0.05), -5px -5px 10px rgba(0, 0, 0, 0.3)"
          : "5px 5px 10px #b8bfc9, -5px -5px 10px #eef1f6",
          backgroundColor: 
          checkedFilter === list
          ? "#333"
          : "#d3dae6",
          color: 
          checkedFilter === list ? "rgb(222, 222, 222)" : "#333"}}>
            {list}
          </button>
      ))}
    </div>
  );
};
