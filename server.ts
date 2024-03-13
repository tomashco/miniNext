import {
  fastifyTRPCPlugin,
  type FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import type { AppRouter } from "./server/trpc/router/index.js";
import appRouter from "./server/trpc/router/index.js";
import { createContext } from "./server/context.js";
import FastifyFormBody from "@fastify/formbody";
import FastifyVite from "@fastify/vite";
import Fastify from "fastify";

import type {
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerBase,
  RawServerDefault,
} from "fastify";

declare module "fastify" {
  export interface FastifyInstance<
    RawServer extends RawServerBase = RawServerDefault,
    RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
    RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>
  > {
    db: { todoList: string[] };
  }
}

const server = Fastify({
  logger: {
    transport: {
      target: "@fastify/one-line-logger",
    },
  },
});

server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: {
    router: appRouter,
    createContext,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
});

await server.register(FastifyFormBody);
await server.register(FastifyVite, {
  root: import.meta.url,
  renderer: "@fastify/react",
});

await server.vite.ready();

server.decorate("db", {
  todoList: ["Do laundry", "Respond to emails", "Write report"],
});

server.put("/api/todo/items", (req, reply) => {
  server.db.todoList.push(req.body as string);
  reply.send({ ok: true });
});

server.delete("/api/todo/items", (req, reply) => {
  server.db.todoList.splice(req.body as number, 1);
  reply.send({ ok: true });
});

await server.listen({ port: 3000 });
