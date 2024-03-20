import { Button } from "@/components/ui/button";
// @ts-ignore: Unreachable code error
import { useRouteContext } from "/:core.jsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import type { FastifyInstance } from "fastify";
import { TypographyBlockquote, TypographyH2 } from "@/components/typography";

export function getMeta() {
  return { title: "Todo List — Using Data" };
}

export function getData({ server }: { server: FastifyInstance }) {
  return {
    todoList: server.db.todoList,
  };
}

export default function Index() {
  const { data } = useRouteContext();
  const [todoList, updateTodoList] = useState<string[]>(data.todoList);
  const input = useRef<HTMLInputElement | null>(null);
  const addItem = (value: string) => {
    updateTodoList((list) => [...list, value]);
    if (input?.current) input.current.value = "";
  };
  return (
    <div>
      <TypographyH2 text="Todo List — Using Data" />
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      <div className="flex space-x-3">
        <Input placeholder="add Todo" ref={input} />
        <Button
          type="button"
          onClick={() => {
            if (input?.current) addItem(input.current.value);
          }}
        >
          Add
        </Button>
      </div>
      <ul className="flex flex-col items-center">
        {todoList.map((item, i) => {
          return (
            <li
              className="p-3"
              key={`item-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <TypographyBlockquote text="When you navigate away from this route, any additions to the to-do list will be lost, because they're bound to this route component only." />
      <TypographyBlockquote
        text={
          <>
            See the{" "}
            <Button variant={"link"}>
              <Link to="/using-store">/using-store</Link>
            </Button>{" "}
            example to learn how to use the application global state for it.
          </>
        }
      />
    </div>
  );
}
