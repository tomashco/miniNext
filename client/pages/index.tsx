import { isServer, useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/typography";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function getMeta() {
  return {
    title: "Welcome to LovelyPets!",
  };
}

export default function Index() {
  const { snapshot, state } = useRouteContext();

  const pages = [
    {
      linkName: "/using-data",
      href: "/using-data",
      description: "— isomorphic data fetching.",
    },
    {
      linkName: "/using-store",
      href: "/using-store",
      description: <>— integrated Valtio store.</>,
    },
    {
      linkName: "/using-auth",
      href: "/using-auth",
      description: (
        <>
          — <b>custom layout</b>.
        </>
      ),
    },
    {
      linkName: "/form/123",
      href: "/form/123",
      description: (
        <>
          — <code>POST</code> to dynamic route.
        </>
      ),
    },
    {
      linkName: "/actions/data",
      href: "/actions/data",
      description: (
        <>
          — inline <code>GET</code> handler.
        </>
      ),
    },
    {
      linkName: "/actions/form",
      href: "/actions/form",
      description: (
        <>
          — inline <code>POST</code> handler.
        </>
      ),
    },
    {
      linkName: "/client-only",
      href: "/client-only",
      description: (
        <>
          — <b>disabling</b> SSR.
        </>
      ),
    },
    {
      linkName: "/server-only",
      href: "/server-only",
      description: (
        <>
          — <code>0kb</code> JavaScript.
        </>
      ),
    },
    {
      linkName: "/streaming",
      href: "/streaming",
      description: (
        <>
          — <b>streaming</b> SSR.
        </>
      ),
    },
    {
      linkName: "/tRPC",
      href: "/tRPC",
      description: <>— tRPC integration.</>,
    },
    {
      linkName: "/prisma",
      href: "/prisma",
      description: <>— Prisma with server actions.</>,
    },
  ];
  if (isServer) {
    // State is automatically hydrated on the client
    state.message = "LovelyPets!";
  }
  return (
    <>
      <div
        id="header"
        className="h-16 flex items-center justify-between py-12 px-6 w-full md:w-[95%]"
      >
        <img width={100} height={100} alt="logo" src={logo} />
        <TypographyH1 text={snapshot.message} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon">
              <HamburgerMenuIcon color="white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {pages.map(({ linkName, href, description }) => (
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
    </>
  );
}
