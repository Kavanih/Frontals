import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";
import { RiTwitterXLine } from "react-icons/ri";

const SingleLink = ({ text, link, icon }) => {
  return (
    <Link to={link} className="navbar-link">
      {icon && icon}
      {text}
    </Link>
  );
};

const Navbar = () => {
  return (
    <nav className="grid md:grid-cols-5 py-4 mx-auto w-11/12 gap-y-6">
      <div className="flex md:inline justify-center">
        <Link to={"/"}>
          <img src={Logo} alt="" className="w-40" />
        </Link>
      </div>

      <div className="flex gap-3 sm:gap-6 md:col-span-3 justify-center items-center flex-wrap">
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
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;
