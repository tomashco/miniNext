import Markdown from "react-markdown";
// @ts-ignore: Unreachable code error
import readme from "../../README.md?raw";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/typography";

export function getMeta() {
  return {
    title: "Welcome to LovelyPets!",
  };
}

export default function Index() {
  return (
    <Markdown
      components={{
        h1: TypographyH1,
        h2: TypographyH2,
        p: TypographyP,
        a(props) {
          const { node, ...rest } = props;
          return <a className="text-pink-500 hover:underline" {...rest} />;
        },
        ul(props) {
          const { node, ...rest } = props;
          return <ul className="p-3" {...rest} />;
        },

        li(props) {
          const { node, ...rest } = props;
          return <li className="list-disc" {...rest} />;
        },
      }}
    >
      {readme}
    </Markdown>
  );
}
