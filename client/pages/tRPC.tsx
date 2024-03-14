import trpc from "../utils/trpc";
// @ts-ignore
import { useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";

export function getMeta() {
  return { title: "tRPC integration" };
}

export default function Index() {
  const { snapshot, data: owners } = useRouteContext();
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
      <h2>tRPC Integration</h2>
      <div className="flex space-x-3">
        <button type="button" onClick={handleClick}>
          Use Mutation!
        </button>
        {isLoading ? <p>Loading...</p> : <p>{data?.info}</p>}
      </div>
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
