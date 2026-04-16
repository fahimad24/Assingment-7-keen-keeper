"use client";

import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { WiTime3 } from "react-icons/wi";
import { GoGraph } from "react-icons/go";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const Navber = () => {
  const param = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <RiHome2Line /> },
    { name: "Timeline", href: "/timeline", icon: <WiTime3 /> },
    { name: "Stats", href: "/stats", icon: <GoGraph /> },
  ];
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto flex h-16 items-center gap-5 xl:p-0 md:px-10 px-5 justify-between  ">
        <div>
          <Link href="/" className="text-3xl font-extrabold">
            Keen<span className="font-medium text-green">Keeper</span>
          </Link>
        </div>
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} htmlFor="my-drawer" className="btn btn-ghost">
            <CiMenuFries className="text-2xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`flex gap-2 justify-center py-1.5 px-3 rounded-md ${param === item.href ? "bg-green text-white hover:bg-green/90" : "bg-white text-gray-600 hover:bg-green/90 hover:text-white"}`}
                  href={item.href}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-2 p-0 text-lg text-gray-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`flex gap-2 justify-center py-1.5 px-3 rounded-md ${param === item.href ? "bg-green text-white hover:bg-green/90" : "bg-white text-gray-600 hover:bg-green/90 hover:text-white"}`}
                  href={item.href}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
