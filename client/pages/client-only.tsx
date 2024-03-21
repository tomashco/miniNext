import { TypographyBlockquote, TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const clientOnly = true;

export function getMeta() {
  return {
    title: "Client Only Page",
  };
}

export default function ClientOnly() {
  return (
    <>
      <TypographyH2>This route is rendered on the client only!</TypographyH2>
      <Button variant="link">
        <Link to="/">Go back to the index</Link>
      </Button>
      <TypographyBlockquote>
        When this route is rendered on the server, no SSR takes place. See the
        output of <code>curl http://localhost:3000/client-only</code>.
      </TypographyBlockquote>
    </>
  );
}
