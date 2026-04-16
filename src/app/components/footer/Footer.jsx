import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-green md:mt-20 mt-10">
      <section className=" px-5 md:px-10 xl:p-0 py-10 container mx-auto ">
        <div className="text-center">
          <h2 className="lg:text-7xl md:text-6xl text-4xl text-center text-white font-extrabold">
            Keen<span className="font-medium ">Keeper</span>
          </h2>
          <p className="text-white/85 text-center mt-3.5">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div className="mt-8 border-b border-white/20 pb-10">
          <h2 className="md:text-3xl text-2xl text-white text-center">
            Social Links
          </h2>
          <ul className="flex items-center justify-center gap-4 mt-4">
            <li className="w-8 h-8 bg-white rounded-3xl flex items-center justify-center">
              <a
                href="https://www.facebook.com/keenkeeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </li>
            <li className="w-8 h-8 bg-white rounded-3xl flex items-center justify-center">
              <a
                href="https://www.twitter.com/keenkeeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </li>
            <li className="w-8 h-8 bg-white rounded-3xl flex items-center justify-center">
              <a
                href="https://www.instagram.com/keenkeeper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-2 p-4 container mx-auto flex-col md:flex-row">
          <div>
            <p className="text-center text-white/80">
              © 2026 Keen Keeper. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8 mt-4 text-white/80">
            <p>Privacy Policy </p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
