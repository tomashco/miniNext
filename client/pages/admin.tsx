import { Link } from "react-router-dom";

export function getMeta() {
  return { title: "Admin Page" };
}

export default function Admin() {
  return (
    <>
      <h2>You are the Admin!</h2>
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
