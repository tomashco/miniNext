import { Suspense } from "react";
// @ts-ignore: Unreachable code error
import logo from "/assets/logo.svg";
// @ts-ignore: Unreachable code error
import { isServer, useRouteContext } from "/:core.jsx";
import { Layout } from "@/components/layout";
import { TypographyH1 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import menuItems from "@/utils/menuItems";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Default({ children }: { children: React.ReactNode }) {
  const { snapshot, state } = useRouteContext();

  if (isServer) {
    // State is automatically hydrated on the client
    state.message = "LovelyPets!";
  }
  return (
    <Suspense>
      <Layout>
        <div
          id="header"
          className="h-16 flex items-center justify-between py-12 px-6 w-full md:w-8/12"
        >
          <img width={100} height={100} alt="logo" src={logo} />
          <TypographyH1 text={snapshot.message} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <HamburgerMenuIcon color="white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {menuItems.map(({ linkName, href, description }) => (
                <DropdownMenuItem key={linkName + description}>
                  <Link to={href}>
                    {linkName}
                    {description}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="w-full p-6 md:w-6/12">{children}</div>
      </Layout>
    </Suspense>
  );
}
