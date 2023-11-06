import { DisabledInputProps } from "@/entities/disabledInput";
import React from "react";

const DisabledInput = ({ value, customStyle }: DisabledInputProps) => {
  return (
    <input className={customStyle} type="text" disabled value={value}></input>
  );
};

export default DisabledInput;
