import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";
import { WiTime3 } from "react-icons/wi";
import { GoGraph } from "react-icons/go";

const Navber = () => {
  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto flex justify-between py-5 ">
        <div>
          <Link href="/" className="text-3xl font-extrabold">
            Keen<span className="font-medium text-green">Keeper</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal gap-2 p-0 text-lg text-gray-600">
            <li>
              <Link
                className="flex gap-2 justify-center py-1.5 px-3 rounded-md bg-green text-white hover:bg-green/90"
                href="/"
              >
                <RiHome2Line />
                Home
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 justify-center py-1.5 px-3 rounded-md "
                href="/timeline"
              >
                <WiTime3 />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 justify-center py-1.5 px-3 rounded-md"
                href="/stats"
              >
                <GoGraph />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
