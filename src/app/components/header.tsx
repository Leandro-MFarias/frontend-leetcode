"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUser } from "@/context/userInfo";
import { logout } from "@/services/user";
import { useRouter } from "next/navigation";

export function Header() {
  const { userInfo } = useUser();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  if (!userInfo) return;

  return (
    <header className="flex items-center justify-between px-10 py-6 border-b-1 border-zinc-800">
      <h2 className="font-bold text-xl">+praTi - Codifica</h2>

      <DropdownMenu>
        <DropdownMenuTrigger className="text-xl font-bold">
          {userInfo.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
