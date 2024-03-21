import { Suspense } from "react";
// @ts-ignore: Unreachable code error
import logo from "/assets/logo.svg";
// @ts-ignore: Unreachable code error
import { isServer, useRouteContext } from "/:core.jsx";
import { Layout } from "@/components/layout";
import { Header } from "@/components/header";

export default function Default({ children }: { children: React.ReactNode }) {
  const { snapshot, state } = useRouteContext();

  if (isServer) {
    // State is automatically hydrated on the client
    state.message = "LovelyPets!";
  }
  return (
    <Suspense>
      <Layout>
        <Header snapshot={snapshot} logo={logo} />
        <div className="w-full p-6 md:w-6/12">{children}</div>
      </Layout>
    </Suspense>
  );
}
