import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
// @ts-ignore: Unreachable code error
import { createServerAction } from "/:core.jsx";
import { Link } from "react-router-dom";
import { TypographyH2, TypographyP } from "@/components/typography";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const isAdmin = createServerAction();

export function configure(server: FastifyInstance) {
  server.post(
    isAdmin,
    async (
      req: FastifyRequest<{ Body: { username: string } }>,
      reply: FastifyReply
    ) => {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000);
      });
      const username = req.body.username;
      if (username === "admin") {
        return reply.redirect("/admin");
      }
      return reply.redirect("/404");
    }
  );
}

export default function Form() {
  return (
    <>
      <TypographyH2>Using inline server POST handler</TypographyH2>
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      <form action={isAdmin} method="post">
        <TypographyP>Username:</TypographyP>
        <div className="flex space-x-3 items-start justify-between">
          <Input type="text" name="username" />
          <Button type="submit">submit</Button>
        </div>
      </form>
    </>
  );
}
