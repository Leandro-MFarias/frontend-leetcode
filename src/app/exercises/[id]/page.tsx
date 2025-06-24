import { DescriptionExercise } from "@/app/components/description-exercise";
import { EditorAndTests } from "@/app/components/editor-tests";
import exercises from "@/api/exercises.json";

export default async function Exercise({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = exercises.find((ex) => ex.id === Number(id));

  if (!exercise) {
    return console.log("Sem exercicio");
  }

  return (
    <div className="h-screen grid grid-cols-2 p-4 space-x-4">
      {/* DESCRIPTION EXERCICE */}
      <DescriptionExercise exercise={exercise} />

      {/* EDITOR AND TESTCASE */}
      <EditorAndTests exercise={exercise} />
    </div>
  );
}
