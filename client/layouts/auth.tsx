// @ts-ignore: Unreachable code error
import { isServer, useRouteContext } from "/:core.jsx";
// @ts-ignore: Unreachable code error
import logo from "/assets/logo.svg";
import { Suspense } from "react";
import { LoginLayout } from "@/components/layout/login";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

export default function Auth({ children }: { children: React.ReactNode }) {
  const { actions, state, snapshot } = useRouteContext();

  if (isServer) {
    // State is automatically hydrated on the client
    state.message = "LovelyPets:Auth!";
  }

  const authenticate = () => actions.authenticate(state);
  return (
    <Suspense>
      {snapshot.user.authenticated ? (
        <LoginLayout>
          <Header snapshot={snapshot} logo={logo} />
          <div className="w-full p-6 md:w-6/12">{children}</div>
        </LoginLayout>
      ) : (
        <LoginLayout>
          <Login onClick={() => authenticate()} />
        </LoginLayout>
      )}
    </Suspense>
  );
}

function Login({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-full flex flex-col justify-center space-y-12">
      <p>This route needs authentication.</p>
      <Button onClick={onClick}>Click this button to authenticate.</Button>
    </div>
  );
}
