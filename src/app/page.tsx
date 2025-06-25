"use client";

import { ListsProvider } from "@/context/listfilter";
import { AsideLists } from "./components/aside-lists";
import { Header } from "./components/header";
import { Dashboard } from "./components/dashboard";

export default function Home() {
  return (
    <ListsProvider>
      <Header />
      <div className="grid grid-cols-[380px_1fr]">
        <AsideLists />
        <Dashboard />
      </div>
    </ListsProvider>
  );
}
