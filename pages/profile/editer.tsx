import { NextPage } from "next";
import Input from "@components/input";

const EditProfile: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      {/*  */}
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-500"></div>
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-md text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
        >
          Change
          <input
            id="picture"
            type="file"
            className="hidden"
            accept="images/*"
          />
        </label>
      </div>
      {/*  */}
      <div className="space-y-1">
        <Input label="Emil Address" name="email" kind="text" />
      </div>
      {/*  */}
      <div className="space-y-1">
        <Input label="Phone Number" name="phone" kind="phone" />
      </div>
      {/*  */}
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-md font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Update Profile
      </button>
    </div>
  );
};

export default EditProfile;
