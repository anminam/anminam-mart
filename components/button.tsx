import { cls } from "../pages/libes/utils";

interface IProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}
export default function Button({ large, text, ...rest }: IProps) {
  return (
    <button {...rest} className={cls()}>
      {text}
    </button>
  );
}
