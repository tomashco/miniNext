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
import type { State } from "@/types";

export const Header = ({
  snapshot,
  logo,
}: {
  snapshot: State;
  logo: string;
}) => (
  <div
    id="header"
    className="h-16 flex items-center justify-between py-12 px-6 w-full md:w-8/12"
  >
    <img width={100} height={100} alt="logo" src={logo} />
    <TypographyH1>{snapshot?.message}</TypographyH1>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <HamburgerMenuIcon color="white" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {menuItems.map(({ linkName, href, description }) => (
          <DropdownMenuItem key={linkName + description} asChild>
            <Link to={href}>
              {linkName}
              {description}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
