import Navbar from "../components/Navbar";
import tokenImage from "../assets/1.PNG";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { galleryData } from "../constants/galleryData";
import { metadata } from "../constants/metadata";

const TokenDetails = ({ title, value, percent }) => {
  return (
    <div>
      <div>{title}</div>

      <div className="flex justify-between bg-gray-50 text-black rounded-md p-1 mt-3">
        <div>{value}</div>
        <div>{percent}</div>
      </div>
    </div>
  );
};

const ViewToken = () => {
  const navigate = useNavigate();
  const [currentToken, setCurrentToken] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const curr = metadata.find((item) => item.tokenId === id);
    setCurrentToken(curr);
  }, [id]);

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
        <div className="text-center text-4xl mb-4">frogtails #{id}</div>
        <img src={currentToken?.image} alt="" className="w-full  rounded-md" />
        <div className="mb-10 mt-3 mb-10">
          <div className="text-3xl">{currentToken.name}</div>
          <div className="">{currentToken.description}</div>
        </div>

        <div className="flex flex-col gap-4">
          {currentToken?.attributes?.map((item, idx) => (
            <TokenDetails
              title={item.trait_type}
              value={item.value}
              percent={item.rarity}
              key={idx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewToken;
