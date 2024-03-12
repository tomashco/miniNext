import type { ReactNode } from "react";
import QueryProvider from "./query";
import TRPCProvider from "./trpc";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <QueryProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </QueryProvider>
  );
};

export default RootProvider;
