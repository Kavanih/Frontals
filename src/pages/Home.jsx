import Navbar from "../components/Navbar";
import Logo from "../assets/logo.png";
import HomeImageBottom from "../components/HomeImageBottom";

const Home = () => {
  return (
    <div className="">
      <Navbar />

      <div className="flex items-center justify-center">
        <img src={Logo} alt="" className="w-4/5" />
      </div>

      <HomeImageBottom />
    </div>
  );
};

export default Home;
