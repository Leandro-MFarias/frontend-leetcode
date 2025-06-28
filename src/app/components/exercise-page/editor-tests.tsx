import { TestCases } from "./testcases";
import { CodeEditor } from "./code-editor";

export function EditorAndTests({ exercise }) {
  return (
    <div className="flex flex-col justify-between space-y-3">
      <CodeEditor exercise={exercise} />

      {/* TESTCASE */}
      <TestCases exercise={exercise} />
    </div>
  );
}
