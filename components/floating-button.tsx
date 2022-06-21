import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  href: string;
}
export default function FloatingButton({ children, href }: IProps) {
  return (
    <Link href={href}>
      <a className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full text-white p-4 shadow-xl">
        {children}
      </a>
    </Link>
  );
}
