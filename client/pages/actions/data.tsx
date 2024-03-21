import type { FastifyInstance } from "fastify";
// @ts-ignore: Unreachable code error
import { createServerAction, useServerAction } from "/:core.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TypographyBlockquote,
  TypographyH2,
  TypographyP,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
// https://hire.jonasgalvez.com.br/2024/mar/04/server-actions-in-fastify/

const accessCounter = createServerAction();

export function configure(server: FastifyInstance) {
  let counter = 0;
  server.get(accessCounter, (_, reply) => {
    reply.send({ counter: ++counter });
  });
}

export default function Form() {
  // useServerAction(endpoint) acts a React suspense resource,
  // with the exception that data is retrieved only once per
  // route and cleared only when the user navigates to another route.
  const data = useServerAction(accessCounter);

  const [counter, setCounter] = useState(data.counter);

  // Just use endpoint string to retrieve fresh data on-demand
  const incrementCounter = async () => {
    const request = await fetch(accessCounter); // client side call to server.get(accessCounter, ...)
    const data = await request.json();
    setCounter(data.counter);
  };

  return (
    <>
      <TypographyH2>Using inline server GET handler</TypographyH2>
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      <div>
        <Button type="button" onClick={incrementCounter}>
          Increment counter: {counter}
        </Button>
      </div>

      <TypographyBlockquote>
        <code>useServerAction(endpoint)</code> acts a React Suspense resource,
        with the exception that data is retrieved only once per route and
        cleared only when the user navigates to another route.
      </TypographyBlockquote>
    </>
  );
}
