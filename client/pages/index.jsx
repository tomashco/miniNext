import { isServer, useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import { Button } from "@/components/ui/button";

export function getMeta() {
  return {
    title: "Welcome to @fastify/react!",
  };
}

export default function Index() {
  const { snapshot, state } = useRouteContext();
  if (isServer) {
    // State is automatically hydrated on the client
    state.message = "Welcome to @fastify/react!";
  }
  return (
    <>
      <div
        id="header"
        className="h-16 flex items-center justify-between w-full md:w-[95%]"
      >
        <img width={100} height={100} alt="logo" src={logo} />
        <h1>{snapshot.message}</h1>
      </div>
      <ul className="columns-2">
        <li>
          <Link to="/using-data">
            <Button>/using-data</Button>
          </Link>{" "}
          — isomorphic data fetching.
        </li>
        <li>
          <Link to="/using-store">/using-store</Link> — integrated{" "}
          <a href="https://github.com/pmndrs/valtio">Valtio</a> store.
        </li>
        <li>
          <Link to="/using-auth">/using-auth</Link> — <b>custom layout</b>.
        </li>
        <li>
          <Link to="/form/123">/form/123</Link> — <code>POST</code> to dynamic
          route.
        </li>
        <li>
          <Link to="/actions/data">/actions/data</Link> — inline{" "}
          <code>GET</code> handler.
        </li>
        <li>
          <Link to="/actions/form">/actions/form</Link> — inline{" "}
          <code>POST</code> handler.
        </li>
        <li>
          <Link to="/client-only">/client-only</Link> — <b>disabling</b> SSR.
        </li>
        <li>
          <Link to="/server-only">/server-only</Link> — <code>0kb</code>{" "}
          JavaScript.
        </li>
        <li>
          <Link to="/streaming">/streaming</Link> — <b>streaming</b> SSR.
        </li>
        <li>
          <Link to="/tRPC">/tRPC</Link> — tRPC integration.
        </li>
        <li>
          <Link to="/prisma">/prisma</Link> — Prisma with server actions.
        </li>
      </ul>
    </>
  );
}
