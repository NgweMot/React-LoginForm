import React from "react";

const ButtonComponent = ({ style,children, ...rest }) => {
  return (
    <button
      {...rest}
      className={`p-2 rounded-md border border-blue-700 w-full active:ring-2 active:duration-200 active:ring-blue-600 text-white bg-blue-500 mt-5 ${style}`}
    >
     {children}
    </button>
  );
};

export default ButtonComponent;
