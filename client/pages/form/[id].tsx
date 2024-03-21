// @ts-ignore: Unreachable code error
import { Input } from "@/components/ui/input";
// @ts-ignore: Unreachable code error
import { useRouteContext } from "/:core.jsx";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { FastifyReply, FastifyRequest } from "fastify";
import { FastifyRequestType } from "fastify/types/type-provider";

export function getData({
  req,
  reply,
}: {
  req: FastifyRequest<{ Body: { number: string } }>;
  reply: FastifyReply;
}) {
  if (req.method === "POST") {
    if (req.body.number !== "42") {
      return reply.redirect("/");
    }
    return req.body;
  }
  return {
    number: "",
  };
}

export default function Form() {
  const { data } = useRouteContext();
  return (
    <>
      <TypographyH2>Form example with dynamic URL</TypographyH2>
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      {data.number === "42" && (
        <TypographyH3 className="p-6">🥳 You found it!</TypographyH3>
      )}
      <form method="post" className=" py-6">
        <TypographyP>Magic number:</TypographyP>
        <div className="flex space-x-3 items-start justify-between">
          <Input
            type="text"
            id="number"
            name="number"
            placeholder="maybe 42?"
            defaultValue={data.number}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <TypographyBlockquote>
        When you send the form, a POST to server is sent. Then, the server will
        decide wether to redirect you to homepage or return the magic number
        under data.number.
      </TypographyBlockquote>
    </>
  );
}
