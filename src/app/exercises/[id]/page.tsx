import { DescriptionExercise } from "@/app/components/exercise-page/description-exercise";
import { EditorAndTests } from "@/app/components/exercise-page/editor-tests";
import { ExerciseProvider } from "@/context/exercise";

export default async function Exercise({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ExerciseProvider exerciseId={id}>
      <div className="h-screen grid grid-cols-2 p-4 space-x-4">
        {/* DESCRIPTION EXERCICE */}
        <DescriptionExercise />

        {/* EDITOR AND TESTCASE */}
        <EditorAndTests />
      </div>
    </ExerciseProvider>
  );
}
