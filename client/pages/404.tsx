import { Link } from "react-router-dom";

export function getMeta() {
  return { title: "404 Error" };
}

export default function Admin() {
  return (
    <>
      <h2>404 Error</h2>
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
