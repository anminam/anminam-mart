import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const router = useRouter();
  const [person, serPerson] = useState({});

  useEffect(() => {
    (async () => {
      const { id } = router.query;
      const res = await fetch(
        `https://billions-api.nomadcoders.workers.dev/person/${id}`
      );
      const obj = await res.json();
      serPerson(obj);
    })();
  });
  return (
    <div className="container">
      d
      <style jsx>
        {`
          .container {
            display: flex;
            justify-content: center;
            padding: 10px;
          }
          .list {
            display: grid;
            grid-template-columns: repeat(4, minmax(200px, 200px));
            row-gap: 20px;
            column-gap: 20px;
          }
        `}
      </style>
    </div>
  );
}
