import { TypographyH2 } from "@/components/typography";
import trpc from "../utils/trpc";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function getMeta() {
  return { title: "tRPC integration" };
}

export default function Index() {
  const { isLoading, data, mutate } = trpc.exampleWithArgs.useMutation({
    onSuccess: (res) => {
      console.log("🚀 mutation success: ", res);
    },
    onError: (err) => console.log("❌ mutation error: ", err),
  });

  const handleClick = () => {
    mutate({ message: "world", test: 42 });
  };

  return (
    <>
      <TypographyH2>tRPC Integration</TypographyH2>
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      <div className="flex space-x-3 items-center">
        <Button onClick={handleClick}>Use Mutation!</Button>
        {isLoading ? <p>Loading...</p> : <p>{data?.info}</p>}
      </div>
    </>
  );
}
