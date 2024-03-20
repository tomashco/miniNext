import { TypographyBlockquote, TypographyH2 } from "@/components/typography";
// @ts-ignore: Unreachable code error
import { useRouteContext } from "/:core.jsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function getMeta() {
  return { title: "Todo List — Using Store" };
}

export default function Index() {
  const { actions, state, snapshot } = useRouteContext();
  const input = useRef<HTMLInputElement | null>(null);
  const addItem = async (value: string) => {
    await actions.todoList.add(state, value);
    if (input.current) input.current.value = "";
  };
  return (
    <>
      <TypographyH2 text={"Todo List — Using Store"} />
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
      <ul className="flex flex-col">
        {snapshot.todoList.map((item: string, i: number) => {
          return (
            <li
              className="list-none p-3"
              key={`item-${
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                i
              }`}
            >
              <button
                type="button"
                className="mr-2"
                onClick={() => {
                  console.log(Object.keys(actions.todoList));
                  actions.todoList.remove(state, i);
                }}
              >
                X
              </button>
              {item}
            </li>
          );
        })}
      </ul>
      <TypographyBlockquote
        text="When you navigate away from this route, any additions to the to-do list
        are not lost, because they're bound to the global application state."
      />
    </>
  );
}
