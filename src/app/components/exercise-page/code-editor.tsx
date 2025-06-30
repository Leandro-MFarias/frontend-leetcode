"use client";

import { CloudUploadIcon, CodeXmlIcon } from "lucide-react";
import { ContainerHeader } from "./exercise-header";
import { Editor } from "@monaco-editor/react";
// import { useState } from "react";
import { useExercise } from "@/context/exercise";

export function CodeEditor() {
  const { exercise } = useExercise()
  // const [code, setCode] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  if (!exercise) return 

  return (
    <div className="bg-[#1e1e1e] rounded-xl border shadow-md space-y-3 h-[80%]">
      <ContainerHeader
        title="Code"
        icon={<CodeXmlIcon className="text-lime-500" />}
      />

      <form onSubmit={(e) => handleSubmit(e)} className="h-[80%]">
        <Editor
          className="h-full"
          defaultLanguage="javascript"
          defaultValue={exercise.functionSignature.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
          // onChange={(e) => setCode(e.target.value)}
        />

        {/* RUN CODE */}
        <div className="mt-6 flex items-center justify-end space-x-4 bg-neutral-700/50 rounded-b-xl p-2 pr-6">
          <button
            type="submit"
            className="flex space-x-1 text-lime-500 hover:text-lime-400 cursor-pointer"
          >
            <CloudUploadIcon />
            <p className="font-semibold">Submit</p>
          </button>
        </div>
      </form>
    </div>
  );
}
