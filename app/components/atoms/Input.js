import React from "react";

const Input = ({ data }) => {
  return (
    <div>
      <input value={data} onChange={(e) => e.target.value}></input>
    </div>
  );
};

export default Input;
