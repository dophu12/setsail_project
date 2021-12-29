import React from "react";

function InputBtn({ type, placeholder, iconClass, className }) {
  return (
    <div className={`input-btn ${className}`}>
      <i className={iconClass}></i>
      <input type={type} placeholder={placeholder}/>
    </div>
  );
}

export default InputBtn;
