import { ScanTextIcon } from "lucide-react";
import { ContainerHeader } from "./exercise-header";

export function DescriptionExercise({ exercise }) {
  return (
    <div className="bg-[#1e1e1e] rounded-xl h-full border shadow-md">
      <ContainerHeader
        title="Descrição"
        icon={<ScanTextIcon className="text-sky-500" size={20} />}
        description="Lista de Exercício 1"
      />

      <div className="p-3 space-y-6">
        <h1 className="text-3xl font-bold">{exercise.title}</h1>

        {/* DESCRIPTION */}
        <div className="space-y-2 max-w-11/12">
          <p className="text-xl">{exercise.subtitle}</p>
          <span className="text-muted-foreground text-lg">
            {exercise.description}
          </span>
        </div>

        {/* EXAMPLE  */}
        <div className="space-y-4">
          {exercise.exemple.map((item, index) => (
            <div key={index} className="space-y-1">
              <h4 className="font-bold">Exemplo: {item.exemplo}</h4>
              <div className="border-2 shadow-md p-3 rounded-md">
                <p>
                  <span className="font-bold">Entrada:</span> {item.entrada}
                </p>
                <p>
                  <span className="font-bold">Saida:</span> {item.saida}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
