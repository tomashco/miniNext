import { Input } from "@/components/ui/input";
// @ts-ignore: Unreachable code error
import { useRouteContext } from "/:core.jsx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TypographyBlockquote, TypographyH2 } from "@/components/typography";
import { Button } from "@/components/ui/button";

export const layout = "auth";

export function getMeta() {
  return { title: "Using Custom Layout" };
}

export default function Index() {
  const { snapshot, state, actions } = useRouteContext();
  const input = useRef<HTMLInputElement | null>(null);
  const addItem = async (value: string) => {
    await actions.todoList.add(state, value);
    if (input?.current?.value) input.current.value = "";
  };
  return (
    <>
      <TypographyH2>Todo List — Using Custom Layout</TypographyH2>
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
        {snapshot.todoList.map((item: string, i: number) => {
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
      <TypographyBlockquote>
        This example is exactly the same as{" "}
        <Link to="/using-store">/using-store</Link>, except it's wrapped in a
        custom layout which blocks it until
        <code>user.authenticated</code> is <code>true</code> in the global
        state.
      </TypographyBlockquote>
    </>
  );
}
