import { Link } from "react-router-dom";
import Logo from "../assets/logo.PNG";

const SingleLink = ({ text, link }) => {
  return (
    <Link to={link} className="navbar-link">
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
        <SingleLink text={"Mint"} link={"/"} />
        <SingleLink text={"gallery"} link={"/gallery"} />
        <SingleLink text={"T"} link={"/"} />
      </div>

      <div></div>
    </nav>
  );
};

export default Navbar;
