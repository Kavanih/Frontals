import Navbar from "../components/Navbar";
import tokenImage from "../assets/1.jpg";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TokenDetails = ({ title, value, percent }) => {
  return (
    <div>
      <div>{title}</div>

      <div className="flex justify-between bg-gray-50 text-black rounded-md p-1 mt-3">
        {/* <div className="flex justify-between bg-gray-50 text-gray-400 rounded-md p-1 mt-3"> */}
        <div>{value}</div>
        <div>{percent}%</div>
      </div>
    </div>
  );
};

const ViewToken = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto mt-6">
        <div
          className="sm:w-14 sm:h-14 w-10 h-10 flex justify-center items-center bg-green-500 rounded-md text-white text-xl sm:text-3xl cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoArrowBackOutline />
        </div>
      </div>

      <div className="max-w-xl mx-auto my-10 font-staatliches bg-green-800 text-white p-6 rounded-lg w-11/12">
        <div className="text-center text-4xl mb-4">frogtails #875</div>
        <img src={tokenImage} alt="" className="w-full mb-10 rounded-md" />

        <div className="flex flex-col gap-4">
          <TokenDetails title={"BACKGROUND"} value={"Space"} percent={"1.5"} />
          <TokenDetails title={"body"} value={"bill"} percent={"1.5"} />
          <TokenDetails title={"mouth"} value={"teeth"} percent={"1.5"} />
          <TokenDetails title={"eye"} value={"diamond"} percent={"1.5"} />
          <TokenDetails title={"eyewear"} value={"meter"} percent={"1.5"} />
          <TokenDetails title={"headwear"} value={"bunshoo"} percent={"1.5"} />
          <TokenDetails title={"cloth"} value={"none"} percent={"1.5"} />
          <TokenDetails title={"earing"} value={"none"} percent={"1.5"} />
          <TokenDetails title={"unique fox"} value={"none"} percent={"1.5"} />
        </div>
      </div>
    </div>
  );
};

export default ViewToken;
