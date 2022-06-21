import { NextPage } from "next";
import Input from "../../components/input";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full text-gray-600 hover:border-orange-500 hover:text-orange-500 cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <input className="hidden" type="file"></input>
        </label>
      </div>
      {/*  */}
      <div className="my-5">
        <Input label={"price"} name={"price"} kind="price" />
      </div>
      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea className="mt-1 shadow-sm w-full  focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"></textarea>
        <div></div>
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-md font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        업로드
      </button>
    </div>
  );
};

export default Upload;
