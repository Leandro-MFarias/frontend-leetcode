"use client";

import { useVerifyContext } from "@/context/verifyContext";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useVerifyToken() {
  const { setChecked } = useVerifyContext()
  const router = useRouter();

  useEffect(() => {
    async function check() {
      const res = await fetch(`${api}/user`, {
        credentials: "include",
      });

      if (res.status === 401) {
        return router.push("/login");
      } else {
        setChecked(true);
      }
    }

    check();
  }, []);
}