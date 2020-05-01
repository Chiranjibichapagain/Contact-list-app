import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="filterArea">
      <input
        id="filterInput"
        placeholder="Type and search contact"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
