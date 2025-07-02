"use client";

import { useVerifyToken } from "@/hooks/verifyToken";
import { DescriptionExercise } from "./description-exercise";
import { EditorAndTests } from "./editor-tests";
import { useVerifyContext } from "@/context/verifyContext";
import { LoaderCircleIcon } from "lucide-react";

export function ContainerPage() {
  const { checked } = useVerifyContext();
  useVerifyToken();

  return (
    <>
      {checked ? (
        <div className="h-screen grid grid-cols-2 p-4 space-x-4">
          {/* DESCRIPTION EXERCICE */}
          <DescriptionExercise />

          {/* EDITOR AND TESTCASE */}
          <EditorAndTests />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <LoaderCircleIcon className="animate-spin" size={60} />
        </div>
      )}
    </>
  );
}
