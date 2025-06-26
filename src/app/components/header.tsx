"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout, userInfo } from "@/services/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [userName, setUserName] = useState<string>("")
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/login");
  }

  useEffect(() => {
    async function fetchUser() {
      const data = await userInfo()
      setUserName(data.name)
    }
    fetchUser()
  }, [])


  return (
    <header className="flex items-center justify-between px-10 py-6 border-b-1 border-zinc-800">
      <h2>+praTi - Codifica</h2>

      <DropdownMenu>
        <DropdownMenuTrigger>{userName}</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
