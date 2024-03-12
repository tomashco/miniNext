import { httpBatchLink } from "@trpc/client";
import trpc from "../utils/trpc";
import { queryClient } from "./query";
import { transformer } from "../../trpc/transformer";

const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: "/trpc",
    }),
  ],
  transformer,
});

const TRPCProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      {children}
    </trpc.Provider>
  );
};

export default TRPCProvider;
