import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import { RiTwitterXLine } from "react-icons/ri";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { FaTelegramPlane } from "react-icons/fa";

const SingleLink = ({ text, link, icon }) => {
  return (
    <Link to={link} className="navbar-link">
      {icon && icon}
      {text}
    </Link>
  );
};

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="flex justify-between md:grid grid-cols-5 py-4 mx-auto w-11/12 gap-y-6">
      <div className="flex md:inline justify-center">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-40" />
        </Link>
      </div>

      <div className="md:flex gap-3 sm:gap-6 md:col-span-3 justify-center items-center flex-wrap hidden">
        <SingleLink text={"Home"} link={"/"} />
        <SingleLink text={"Mint"} link={"/mint"} />
        <SingleLink text={"gallery"} link={"/gallery"} />

        <Link
          to={"https://x.com/Frogtals"}
          className="navbar-link"
          target="_blank"
        >
          <RiTwitterXLine className="text-xl" />
        </Link>

        <Link
          to={"https://t.me/Frogtals"}
          className="navbar-link"
          target="_blank"
        >
          <FaTelegramPlane className="text-xl" />
        </Link>
      </div>

      <div className="hidden md:inline"></div>

      <div
        className="cursor-pointer md:hidden w-10 h-10 flex items-center justify-center border border-green-500 rounded-md"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <FiMenu /> : <LiaTimesSolid />}
      </div>

      {/* {openMenu && ( */}
      <div
        className={`flex md:hidden flex-col items-center justify-center h-screen w-screen fixed z-10 bg-green-700 text-white duration-500 ${
          openMenu ? "left-0" : "left-full"
        } top-0 gap-4`}
      >
        <LiaTimesSolid
          onClick={() => setOpenMenu(false)}
          className="text-3xl absolute top-4 right-4 cursor-pointer"
        />

        <Link
          to={"/"}
          className="mobile-nav-link"
          onClick={() => setOpenMenu(false)}
        >
          Home
        </Link>
        <Link
          to={"/mint"}
          className="mobile-nav-link"
          onClick={() => setOpenMenu(false)}
        >
          Mint
        </Link>
        <Link
          to={"/gallery"}
          className="mobile-nav-link"
          onClick={() => setOpenMenu(false)}
        >
          Gallery
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to={"https://x.com/Frogtals"}
            className="mobile-nav-link"
            target="_blank"
          >
            <RiTwitterXLine className="text-xl" />
          </Link>
          <Link
            to={"https://t.me/Frogtals"}
            className="mobile-nav-link"
            target="_blank"
          >
            <FaTelegramPlane className="text-xl" />
          </Link>
        </div>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
