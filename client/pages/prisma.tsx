// @ts-ignore
import { useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";
import type { Owner, Pet } from "@prisma/client";
import type { FastifyInstance } from "fastify";
import { TypographyH2, TypographyH3 } from "@/components/typography";
import { Button } from "@/components/ui/button";

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
      <TypographyH2>Prisma with server actions</TypographyH2>
      <Button variant={"link"}>
        <Link to="/">Go back to the index</Link>
      </Button>
      {owners.map((owner: OwnerWithPets) => {
        return (
          <div>
            <TypographyH3>Owner: {owner.name}</TypographyH3>
            <ul className="p-3">
              {owner.pets.map((pet: Pet) => {
                return (
                  <li className="space-x-3">
                    <h4>Pet: {pet.name}</h4>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
