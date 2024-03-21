import Markdown from "react-markdown";
// @ts-ignore: Unreachable code error
import readme from "../../README.md?raw";
export function getMeta() {
  return {
    title: "Welcome to LovelyPets!",
  };
}

export default function Index() {
  return <Markdown>{readme}</Markdown>;
}
