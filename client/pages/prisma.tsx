// @ts-ignore
import { useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";
import type { Owner, Pet } from "@prisma/client";
import type { FastifyInstance } from "fastify";

type OwnerWithPets = Owner & { pets: Pet[] };

export function getMeta() {
  return { title: "Prisma with server actions" };
}

export function getData({ server }: { server: FastifyInstance }) {
  const owners = server.prisma.owner.findMany({
    include: { pets: true },
  });

  return owners;
}

export default function Index() {
  const { data: owners } = useRouteContext();

  return (
    <>
      <h2>Prisma with server actions</h2>
      {owners.map((owner: OwnerWithPets) => {
        return (
          <div>
            <h3>Owner name: {owner.name}</h3>
            <ul>
              {owner.pets.map((pet: Pet) => {
                return (
                  <li>
                    <h4>Pet Name: {pet.name}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
