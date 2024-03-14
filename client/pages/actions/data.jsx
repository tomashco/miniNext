import {
  createServerAction,
  useServerAction,
  useRouteContext,
} from "/:core.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
// https://hire.jonasgalvez.com.br/2024/mar/04/server-actions-in-fastify/

const accessCounter = createServerAction();

export function getData({ server }) {
  return {
    message: server.db.todoList,
  };
}

export function configure(server) {
  let counter = 0;
  server.get(accessCounter, (_, reply) => {
    console.log("🚀 ~ server.get ~ accessCounter:", accessCounter);

    reply.send({ counter: ++counter });
  });
}

export default function Form() {
  // useServerAction(endpoint) acts a React suspense resource,
  // with the exception that data is retrieved only once per
  // route and cleared only when the user navigates to another route.
  const data = useServerAction(accessCounter);

  const { data: getData } = useRouteContext();

  const [counter, setCounter] = useState(data.counter);

  // Just use endpoint string to retrieve fresh data on-demand
  const incrementCounter = async () => {
    const request = await fetch(accessCounter); // client side call to server.get(accessCounter, ...)
    const data = await request.json(0);
    setCounter(data.counter);
  };

  return (
    <>
      <h1>Using inline server GET handler</h1>
      <p>getData: {getData.message}</p>
      <p>
        <code>useServerAction(endpoint)</code> acts a React Suspense resource,
        with the exception that data is retrieved only once per route and
        cleared only when the user navigates to another route.
      </p>
      <p>Counter: {counter}</p>
      <input type="button" value="Increment" onClick={incrementCounter} />
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
