type TypographyProps = {
  text: string | JSX.Element;
};

export function TypographyH1({ text }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {text}
    </h1>
  );
}

export function TypographyH2({ text }: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  );
}

export function TypographyH3({ text }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  );
}
export function TypographyH4({ text }: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{text}</h4>
  );
}
export function TypographyP({ text }: TypographyProps) {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{text}</p>;
}
export function TypographyBlockquote({ text }: TypographyProps) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{text}</blockquote>
  );
}

export function TypographyInlineCode({ text }: TypographyProps) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {text}
    </code>
  );
}
