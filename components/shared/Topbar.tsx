import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Topbar({}: Props) {
  return (
    <nav className="topbar">
      <Link href={"/"} className="flex items-center gap-4">
        <Image /> 
      </Link>
    </nav>
  );
}
