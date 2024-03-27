"use client";

import { useSaveTokens } from "@/hooks/useSaveTokens";
import { Buttons } from "./login/buttons";
import { useConn } from "@/hooks/useConn";
import { useRouter } from "next/navigation";
import { useTokenStore } from "@/stores/useTokenStore";
import { useEffect } from "react";

export default function Home() {
  useSaveTokens();
  const conn = useConn();
  const { push } = useRouter();
  const hasTokens = useTokenStore((s) => !!(s.accessToken && s.refreshToken));

  useEffect(() => {
    if (hasTokens || conn.user) {
      push("/home");
    }
  }, [hasTokens, conn]);

  return (
    <main className="flex flex-col gap-3 w-full h-full">
      <div>
        <h1 className="text-5xl font-bold text-center">Spek</h1>
        <p className="text-xl">Simple, public communities</p>
      </div>
      <div>
        <h2 className="font-semibold">Features</h2>
        <ul className="list-disc px-3">
          <li>Open source</li>
          <li>Text chat</li>
          <li>Thread conversations</li>
          <li>Real-time communities</li>
        </ul>
      </div>
      <div className="flex gap-4 flex-col">
        <Buttons />
      </div>
    </main>
  );
}
