import { Link } from "react-router-dom";
import linkImage from "../assets/img/link-image.png";

const GalleryCard = ({ item, index }) => {
  return (
    <div className="">
      <div className="card">
        <div className="card-top">
          <img src={linkImage} alt="" className="w-8 rounded-md" />
          <div className="bg-black flex items-center justify-center px-2 py-1 text-white rounded-md">
            #{index}
          </div>
        </div>

        <div>
          <Link to={`/token/${item.tokenId}`}>
            <img
              src={item.image}
              alt=""
              className="w-full object-cover h-full"
            />
          </Link>
        </div>

        <div className="card-top">
          <div className="text-white">Frogtals</div>
          <div className="text-white">#{item.tokenId}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
