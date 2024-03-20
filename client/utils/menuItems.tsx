import type { ReactNode } from "react";

type MenuItem = {
  linkName: string;
  href: string;
  description: JSX.Element | string;
};

const pages: MenuItem[] = [
  {
    linkName: "/using-data",
    href: "/using-data",
    description: "— isomorphic data fetching.",
  },
  {
    linkName: "/using-store",
    href: "/using-store",
    description: "— integrated Valtio store.",
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

export default pages;
