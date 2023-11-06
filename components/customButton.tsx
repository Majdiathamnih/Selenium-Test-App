"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/entities/customButton";

const customButton = ({
  title,
  handelClick,
  customStyle,
}: CustomButtonProps) => {
  return (
    <button
      className={customStyle}
      type={"button"}
      onClick={handelClick}
      disabled={false}>
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default customButton;
