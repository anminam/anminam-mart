import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-indigo-500">
        <summary className="select-none cursor-pointer">
          내가 좋아하는 음식.
        </summary>
        <span className="selection:bg-indigo-500 selection:text-white">
          피자
        </span>
      </details>
      {/*  */}
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      {/*  */}
      <input
        type="file"
        className="file:border-0 file:rounded-xl file:px-5 
        transition-colors file:cursor-pointer
        file:hover:text-purple-400
        file:hover:bg-white
        file:hover:border-purple-400
        file:hover:border
        file:text-white file:bg-purple-400"
      />
      {/*  */}
      <p className="first-letter:text-7xl first-letter:hover:text-purple-500 first-line:bg-yellow-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quibusdam minus itaque blanditiis perspiciatis unde et, excepturi quasi
        laboriosam molestiae odit officia rem impedit, necessitatibus in
        deserunt rerum. Laboriosam, deleniti?
      </p>
    </div>
  );
};

export default Home;
