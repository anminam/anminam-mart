interface Props {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  [key: string]: any;
}

export default function Input({ label, name, kind, ...rest }: Props) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 s text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      {kind === "text" ? (
        <div className="rounded-md shadow-sm relative flex items-center">
          <input
            id={name}
            type="text"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          ></input>
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md shadow-sm relative flex items-center">
          <div className="absolute left-0 pointer-events-none pl-3 items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id={name}
            {...rest}
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
            placeholder="0.00"
          ></input>
          <div className="absolute right-0 pointer-events-none pr-3  flex items-center ">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
            +82
          </span>
          <input
            id="input"
            type="number"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          ></input>
        </div>
      ) : null}
    </div>
  );
}
