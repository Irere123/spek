"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: string;
  reset: () => void;
}) {
  useEffect(() => {
    // log into the logging service

    console.log(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}