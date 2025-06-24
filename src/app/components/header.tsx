"use client";

import { logout } from "@/services/api";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  return (
    <header className="flex items-center justify-between px-10 py-6 border-b-1 border-zinc-800">
      <h2>+praTi - Codifica</h2>

      <button onClick={handleLogout}>Logout</button>
    </header>
  );
}
