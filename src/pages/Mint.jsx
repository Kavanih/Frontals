import CountdownTimer from "../components/CountdownTimer";
import Navbar from "../components/Navbar";

const Mint = () => {
  return (
    <div>
      <div className="mint">
        <Navbar />
        <CountdownTimer targetDate="Oct 23, 2024 17:00:00 UTC" />
        {/* <div className="mint-text">COMING SOON</div> */}
      </div>
    </div>
  );
};

export default Mint;
