import { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <div className="mb-8">
        <div className="h-96 bg-slate-300" />
        <div className="flex cursor-pointer py-3  border-b items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-sm font-medium text-gray-700">Anminam</p>
            <p className="text-xs font-medium text-gray-500">
              View profile &rarr;
            </p>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy s50</h1>
          <span className="text-3xl block mt-3 text-gray-900">$140</span>
          <p className="text-base my-6 text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            velit unde ab inventore facere recusandae eveniet eius officiis nisi
            itaque, rerum maiores eos nobis facilis quod, illo hic fugit modi!
          </p>
          <div className="flex items-center justify-between s   pace-x-2">
            <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:outline-none hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 font-medium focus:ring-orange-500">
              {" "}
              Talk to Seller
            </button>
            <button className="p-3 flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-400 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">비슷한상품</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div key={i}>
              <div className="h-56 w-full bg-slate-300" />
              <h3 className=" text-gray-700 -mb-1">Galaxy s60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
