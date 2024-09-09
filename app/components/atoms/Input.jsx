import React from "react";

const TextInput = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      type="text"
      value={value}
      className="p-2 rounded-md border-2 border-black"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      {...props}
    />
  );
};

const SelectInput = ({ options, value, onChange, defaultOption }) => {
  return (
    <select
      className="p-2 rounded-md border-2 border-black"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option className="p-2 rounded-md" value="">
        {defaultOption}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export { TextInput, SelectInput };
