import React from "react";

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      className="p-2 rounded-md md:w-2/3"
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

const SelectInput = ({ options, value, onChange, defaultOption }) => {
  return (
    <select
      className="p-2 rounded-md md:w-2/3"
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
