"use client";

import { CloudUploadIcon, CodeXmlIcon } from "lucide-react";
import { ContainerHeader } from "./exercise-header";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { useExercise } from "@/context/exercise";
import { getSubmission, sendSubmission } from "@/services/judge/submission";

export function CodeEditor() {
  const { exercise } = useExercise();
  const [editorCode, setEditorCode] = useState<string | undefined>("");

  if (!exercise) return;

  const {
    functionName,
    testCases,
    functionSignature,
    language: { code },
  } = exercise;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (editorCode?.trim() === "") return alert("Erro");

    const data = {
      functionName,
      languageId: code,
      testCases,
      sourceCode: editorCode,
    };

    try {
      const submission = await sendSubmission(data);
      const response = await getSubmission(submission.token);
      console.log(response);
    } catch (error) {
      console.log("Erro", error);
    }
  }

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
          defaultValue={functionSignature.trim()}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
          }}
          onChange={(e) => setEditorCode(e)}
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
