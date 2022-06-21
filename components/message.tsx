import { cls } from "../pages/libes/utils";

interface IProps {
  text: string;
  revers?: boolean;
}

export default function Message({ text, revers }: IProps) {
  const reversStyle = revers ? "flex-row-reverse space-x-reverse" : "";
  return (
    <div className={cls("flex item-center space-x-2", reversStyle)}>
      <div className="w-8 h-8 rounded-full bg-slate-400" />
      <div className="flex items-center w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
        <p>{text}</p>
      </div>
    </div>
  );
}
