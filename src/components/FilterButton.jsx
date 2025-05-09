export const FilterButton = ({filters, setFilter, checkedFilter}) => {
  const chooseFilter = (filter)=>{
    setFilter(filter);
  };

  return (
    <div>
      {filters.map((filter) => (
        <button 
        onClick={()=> chooseFilter(filter)} 
        style={{
          borderRadius:"5px", 
          border:"none", 
          backgroundColor: 
          checkedFilter === filter
          ? "rgba(107,114,128,1)"
          : "rgb(68, 122, 230)",
          color: 
          checkedFilter === filter ? "rgb(249, 250, 252)" : "rgb(1, 1, 1)"}}>
            {filter}
          </button>
      ))}
    </div>
  );
};
