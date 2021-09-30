import { useState } from "react";

export const useTabs = (initialValue) => {
  const [value, setTabValue] = useState(initialValue);
  const onChange = (_, _value) => {
    setTabValue(_value);
  };
  return { value, onChange };
};
