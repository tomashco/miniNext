import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { PageManager } from "./next.jsx";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Provider as StateProvider } from "jotai";

import routes from "./routes.js";
import { todoList } from "./state.js";

const Router = import.meta.env.SSR ? StaticRouter : BrowserRouter;

export function createApp(ctx, url) {
  return (
    <StateProvider initialValues={[[todoList, ctx.data.todoList]]}>
      <Suspense>
        <Router location={url}>
          <PageManager routes={routes} ctx={ctx} />
        </Router>
      </Suspense>
    </StateProvider>
  );
}
