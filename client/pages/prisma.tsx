import trpc from "../utils/trpc";
// @ts-ignore
import { useRouteContext } from "/:core.jsx";
import { Link } from "react-router-dom";
// import { type Owner, type Pet, PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// type OwnerWithPets = Owner & { pets: Pet[] };

export function getMeta() {
  return { title: "Prisma with server actions" };
}

// export function getData() {
//   const owners = prisma.owner.findMany({
//     include: { pets: true },
//   });

//   return owners;
// }

export default function Index() {
  const { data: owners } = useRouteContext();

  return (
    <>
      <h2>Prisma with server actions</h2>
      {/* {owners.map((owner: OwnerWithPets) => {
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
      })} */}
      <p>
        <Link to="/">Go back to the index</Link>
      </p>
    </>
  );
}
