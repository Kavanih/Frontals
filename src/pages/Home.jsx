import Navbar from "../components/Navbar";
import Logo from "../assets/logo no frog.PNG";
import HomeImageBottom from "../components/HomeImageBottom";

const Home = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />

      <div className="flex items-center justify-center md:mt-44 mt-20">
        <img src={Logo} alt="" className="w-4/5" />
      </div>

      <HomeImageBottom />
    </div>
  );
};

export default Home;
