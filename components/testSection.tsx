"use client";
import React, { useState } from "react";
import CustomButton from "./customButton";
import DisabledInput from "./disabledInput";
import { ResultResponse } from "@/entities/testResponse";

const TestSection = () => {
  const [result, setResult] = useState("");
  const handelStartTest = async () => {
    const testResponse = await fetch("api/test", {
      method: "GET",
    });
    const dataFetch: ResultResponse = await testResponse.json();
    if (dataFetch.result === "true") setResult("True");
    else setResult("False");
  };
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Selenium Test App
        </h1>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <CustomButton
            title="Run the test"
            handelClick={handelStartTest}
            customStyle="bg-cyan-500 hover:bg-cyan-600 p-2 w-80 text-white rounded-full"></CustomButton>
          <DisabledInput
            value={result}
            customStyle="p-2 w-80 rounded-full text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default TestSection;
