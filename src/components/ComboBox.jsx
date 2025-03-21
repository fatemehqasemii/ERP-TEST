import React, { useState } from "react";
import { Select } from "antd";

const ComboBox = ({
  label = "Select",
  options = [],
  onChange,
  value,
  name,
}) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  return (
    <Select
      placeholder={label}
      value={value}
      onChange={handleChange}
      options={options.map((option) => ({
        label: option.label,
        value: option.value,
      }))}
    />
  );
};

export default ComboBox;
