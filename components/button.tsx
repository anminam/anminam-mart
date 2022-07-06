import { cls } from "../pages/libes/utils";

interface IProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}
export default function Button({ large, text, ...rest }: IProps) {
  return (
    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-md font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
      {text}
    </button>
  );
}
