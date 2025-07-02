"use client";

import { ListsProvider } from "@/context/listfilter";
import { AsideLists } from "./components/aside-lists";
import { Header } from "./components/header";
import { MainContent } from "./components/main-content";
import { UserProvider } from "@/context/userInfo";
import { useVerifyToken } from "@/hooks/verifyToken";
import { LoaderCircleIcon } from "lucide-react";
import { useVerifyContext } from "@/context/verifyContext";

export default function Home() {
  const { checked } = useVerifyContext()
  useVerifyToken();

  return (
    <>
      {checked ? (
        <ListsProvider>
          <UserProvider>
            <Header />
            <div className="grid grid-cols-[380px_1fr]">
              <AsideLists />
              <MainContent />
            </div>
          </UserProvider>
        </ListsProvider>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <LoaderCircleIcon className="animate-spin" size={60} />
        </div>
      )}
    </>
  );
}
