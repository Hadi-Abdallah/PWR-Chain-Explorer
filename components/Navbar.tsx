"use client";
import MoonSrc from "@/public/moon.svg";
import LogoSrc from "@/public/Union Logo.svg";
import useTransactionsStore from "@/store/transactionsStore";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  const { open, toggleNavbar } = useTransactionsStore((state) => state);
  return (
    <nav className="flex flex-row justify-between py-12 md:py-5 shadow-xl shadow-[rgba(17,17,17,0.04)] px-10">
      <Image src={LogoSrc} alt="Logo" />
      <ul className="hidden md:flex flex-row justify-between items-center text-sm w-3/5">
        <li className="text-blue-800">
          <Link href="">Explore</Link>
        </li>
        <li>
          <Link href="">Blockchain</Link>
        </li>
        <li>
          <Link href="">Tokens</Link>
        </li>
        <li>
          <Link href="">NFTs</Link>
        </li>
        <li className="flex flex-row gap-4 w-2/5">
          <Link className="bg-gray-100 py-2 px-4 rounded-3xl" href="">
            Connect
          </Link>
          <Link
            className="bg-blue-700 text-gray-50 py-2 px-4 rounded-3xl"
            href=""
          >
            Get Wallet
          </Link>
        </li>
        <button>
          <Image className="w-5" src={MoonSrc} alt="moon" />
        </button>
      </ul>
      <ul
        className={`flex fixed top-0 left-0 overflow-hidden transition-all duration-300 md:hidden flex-col bg-gray-100 justify-evenly items-center text-lg w-full
        ${open ? " h-screen" : " h-0"}`}
      >
        <li className="text-blue-800">
          <Link href="">Explore</Link>
        </li>
        <li>
          <Link href="">Blockchain</Link>
        </li>
        <li>
          <Link href="">Tokens</Link>
        </li>
        <li>
          <Link href="">NFTs</Link>
        </li>
        <li className="flex flex-col gap-4">
          <Link className="bg-gray-100 py-2 px-4 rounded-3xl" href="">
            Connect
          </Link>
          <Link
            className="bg-blue-700 text-gray-50 py-2 px-4 rounded-3xl"
            href=""
          >
            Get Wallet
          </Link>
        </li>
        <button>
          <Image className="w-5" src={MoonSrc} alt="moon" />
        </button>
      </ul>
      <button
        type="button"
        className="relative w-10 h-6 md:hidden"
        onClick={() => toggleNavbar()}
      >
        <span
          className={`absolute w-full h-1 top-0 bg-neutral-950 left-0
            transition-transform rounded-sm${
              open ? " -rotate-45 translate-y-full" : ""
            }`}
        ></span>
        <span
          className={`absolute w-full h-1 bg-neutral-950
            transition-transform rounded-sm
        left-0 top-0${
          open ? " rotate-45 translate-y-full" : " translate-y-[300%]"
        }`}
        ></span>
      </button>
    </nav>
  );
}

export default Navbar;
