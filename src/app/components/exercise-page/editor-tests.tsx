import { TestCases } from "./testcases";
import { CodeEditor } from "./code-editor";

export function EditorAndTests() {
  return (
    <div className="flex flex-col justify-between space-y-3">
      <CodeEditor />

      {/* TESTCASE */}
      <TestCases />
    </div>
  );
}
