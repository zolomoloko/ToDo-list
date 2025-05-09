// import styles from "@/components/styles/Form.module.css"
export const FilterButton = ({filters, setFilter, checkedFilter}) => {
  const chooseFilter = (list)=>{
    setFilter(list);
  };

  return (
    <div>
      {filters.map((list) => (
        <button 
        onClick={()=> chooseFilter(list)} 
        style={{
          borderRadius:"5px", 
          border:"none", 
          backgroundColor: 
          checkedFilter === list
          ? "rgb(234, 213, 92)"
          : "rgb(84, 88, 94)",
          color: 
          checkedFilter === list ? "rgb(84, 88, 94)" : "rgb(234, 213, 92)"}}>
            {list}
          </button>
      ))}
    </div>
  );
};
