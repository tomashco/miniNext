import React from "react";
import { Link } from "react-router-dom";

export async function getServerSideProps({ req, fetchJSON }) {
  const todoList = await fetchJSON("/api/todo-list");
  return { item: todoList[req.params.id] };
}

export default function Item({ item }) {
  console.log("item", item);
  return (
    <>
      <p>{item}</p>
      <p>
        <Link to="/">Go to the index</Link>
      </p>
    </>
  );
}
