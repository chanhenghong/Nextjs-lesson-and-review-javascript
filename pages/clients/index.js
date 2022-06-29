import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

const clients = [
  { id: "chanheng", name: "Chanheng" },
  { id: "heng sweet boy", name: "Heng Sweet Boy" },
];

const clientIdex = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      {clients.map((name) => (
        <li key={name.id}>
          {/* <Link href={`/clients/${name.id}`}>{name.name}</Link> */}
          <Link href={{ pathname: "/clients/[id]", query: { id: name.id } }}>
            {name.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default clientIdex;
