import { mergeRouters } from "../trpc.js";
import ExampleRouter from "./example.js";

type AppRouter = typeof appRouter;

const appRouter = mergeRouters(ExampleRouter);

export default appRouter;
export type { AppRouter };
