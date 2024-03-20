import type { ReactNode } from "react";

export const Layout = ({ children }: { children: ReactNode }) => (
  // <div className="h-screen "></div>
  <div className="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
    {children}
  </div>
);
