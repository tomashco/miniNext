import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import fastifyReact from "@fastify/react/plugin";
import viteReact from "@vitejs/plugin-react";

const path = fileURLToPath(import.meta.url);

export default {
  root: join(dirname(path), "client"),
  plugins: [viteReact(), fastifyReact()],
  resolve: {
    alias: {
      "@": join(dirname(path), "client"),
    },
  },
  ssr: {
    external: ["use-sync-external-store"],
    noExternal: ["@trpc/react-query"],
  },
};
