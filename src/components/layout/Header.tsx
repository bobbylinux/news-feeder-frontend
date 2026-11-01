import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

function Header() {
  return (
    <nav className="grid grid-cols-3 items-center px-10 py-4">
      <div>
        <Menu />
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="News Feeder Logo"
            width={250}
            height={80}
            priority
          />
        </Link>
      </div>
      <div className=" flex justify-end">
        <span className="m-10 text-2xl ">
          <Link href="/login">Login</Link>
        </span>
        <span className="m-10  text-2xl">
          <Link href="/registration">Sign Up</Link>
        </span>
      </div>
    </nav>
  );
}

export default Header;
