import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <aside className="flex flex-col h-screen max-w-96 border-r-1 border-zinc-800 p-6 space-y-6">
        <div>
          <h4 className="font-bold text-lg">Listas de Exercícios</h4>
          <div className="bg-zinc-800 w-full h-[1px]" />
        </div>

        <nav>
          <ul>
            <li>JS Lógica básica</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
