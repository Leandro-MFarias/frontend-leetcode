import { ContainerPage } from "@/app/components/exercise-page/container-page";
import { ExerciseProvider } from "@/context/exercise";

export default async function Exercise({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <ExerciseProvider exerciseId={id}>
      <ContainerPage />
    </ExerciseProvider>
  );
}
