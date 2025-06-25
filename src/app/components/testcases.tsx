"use client";

import { SquareCheckBigIcon } from "lucide-react";
import { ContainerHeader } from "./exercise-header";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TestCases({ exercise }) {
  const [isCase, setIsCase] = useState(0);

  function handleCase(i: number) {
    setIsCase(i);
  }

  return (
    <div className="bg-[#1e1e1e] h-5/12 rounded-xl border shadow-md">
      <ContainerHeader
        title="Testcase"
        icon={<SquareCheckBigIcon className="text-lime-500" />}
      />
      <div className="p-2 space-y-5">
        {/* BUTTONS CASE */}
        <div className="space-x-3">
          {exercise.testCases.map((test, index) => (
            <Button
              key={index}
              variant={`${isCase === index ? "outline" : "ghost"}`}
              className={`cursor-pointer px-4 py-3.5 h-0`}
              onClick={() => handleCase(index)}
            >
              Case {index + 1}
            </Button>
          ))}
        </div>

        {/* CASES */}
        {exercise.testCases.map((test, index) => (
          <div
            key={index}
            className={`space-y-1 ${isCase !== index && "hidden"}`}
          >
            <p className="px-2">n = {test.input}</p>
            <span className="flex bg-neutral-700/80 px-2 py-2.5 rounded-lg ml-2">
              {test.expectedOutput}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
