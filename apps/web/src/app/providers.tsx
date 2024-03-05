"use client";

import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "react-query";

interface Props {
  children?: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};