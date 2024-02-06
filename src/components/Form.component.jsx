import React from "react";

const FormComponent = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col mt-5">
      <label htmlFor={name}>{label}</label>
      <input
      {...rest}
        className="p-2 rounded-lg border-2 border-blue-300 mt-2"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponent;
