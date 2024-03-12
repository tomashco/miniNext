import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../trpc/router";

const trpc = createTRPCReact<AppRouter>();

export default trpc;
