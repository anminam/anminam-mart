import type { NextPage } from "next";
import FloatingButton from "../components/floating-button";
import Item from "../components/item";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-5">
      <Layout title="홈" hasTabBar>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((key, i) => (
          <Item
            key={key}
            id={key}
            title={"a"}
            price={212}
            hearts={40}
            comments={12}
          />
        ))}
        <FloatingButton href={"/items/upload"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </FloatingButton>
      </Layout>
    </div>
  );
};

export default Home;
