import type { ReactNode } from "react";

export const LoginLayout = ({ children }: { children: ReactNode }) => (
  <div className="absolute top-0 z-[-2] h-screen w-screen flex flex-col items-center transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(173,216,230,.5)_100%)]">
    {children}
  </div>
);
