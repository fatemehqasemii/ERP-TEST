import React from "react";
import { Input as AntInput } from "antd";

const Input = ({
  placeholder = "Enter text",
  value,
  onChange,
  disabled = false,
  allowClear = false,
  size = "sm",
  suffix,
  name,
  maxWidth = "200px",
}) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  return (
    <AntInput
      placeholder={placeholder}
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      disabled={disabled}
      allowClear={allowClear}
      size={size}
      name={name}
      suffix={suffix}
      style={{ width: "100%", maxWidth: maxWidth }}
    />
  );
};

export default Input;
