import React from "react";
import "./form-input.style.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
