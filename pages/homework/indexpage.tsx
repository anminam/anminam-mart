import { useEffect, useState } from "react";
import Link from "next/link";
export default function IndexPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("https://billions-api.nomadcoders.workers.dev/");
      const obj = await res.json();
      setList(obj);
    })();
  });
  return (
    <div className="container">
      <ul className="list">
        {list.map((person) => (
          <li key={person.id}>
            <Link href={`/homework/${person.id}`}>
              <a>
                <Card
                  id={person.id}
                  name={person.name}
                  imgSrc={person.squareImage}
                  money={person.netWorth}
                  industries={person.industries}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
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

const Card = ({ id, name, imgSrc, money, industries }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={id + "'s picture"} />
      <div>
        <h3>{name}</h3>
        <div className="info">
          <span>{Math.round(money)} Billions</span>
          <span> / </span>
          <span>{industries.join(",")}</span>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            cursor: pointer;
          }
          .card:hover {
            transform: scale(1.05);
            transition: 0.5s;
          }
          img {
            width: 200px;
            height: 200px;
          }
          h3 {
            font-weight: bold;
          }
          .info {
            font-size: 0.8rem;
            color: #555;
          }
        `}
      </style>
    </div>
  );
};
