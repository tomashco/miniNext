import { TypographyBlockquote, TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const serverOnly = true;

export default function ServerOnly() {
  return (
    <>
      <TypographyH2>This route is rendered on the server only!</TypographyH2>
      <Button variant="link">
        <Link to="/">Go back to the index</Link>
      </Button>
      <TypographyBlockquote>
        When this route is rendered on the server, no JavaScript is sent to the
        client. See the output of{" "}
        <code>curl http://localhost:3000/server-only</code>.
      </TypographyBlockquote>
    </>
  );
}
