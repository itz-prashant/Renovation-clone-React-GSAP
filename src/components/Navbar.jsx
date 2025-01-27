import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  
  useGSAP(() => {

    gsap.from(
      ".navbar",
      {
        y: "-100%",
        opacity: 0,
        duration:1,
      });
  });

  return (
    <div className="navbar w-full px-[50px] flex items-center justify-between absolute z-[99] h-[100px] text-white">
      <h1 className="nav-logo text-[36px] font-playfair">Renevo</h1>
      <div className="w-[45%] font-popins">
        <ul className="nav-links flex items-center justify-between text-[18px]">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a
              href="/"
              className="flex items-center justify-center w-[115px] h-[36px] bg-white text-black rounded-[5px]"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
