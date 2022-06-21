import { NextPage } from "next";

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {/* 프로필 */}
      {[1, 2, 3, 4, 5, 6].map((_, i) => (
        <div
          key={i}
          className="flex px-4 cursor-pointer py-3 items-center space-x-3"
        >
          <div className="w-12 h-12 rounded-full bg-slate-300" />
          <div>
            <p className="text-gray-700">Anminam</p>
            <p className="text-xs text-gray-500">내일 거기서 봐 2시에</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
