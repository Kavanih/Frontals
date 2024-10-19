import { Link } from "react-router-dom";
// import linkImage from "../assets/img/link-image.png";

const GalleryCard = ({ item, index }) => {
  return (
    <div className="text-white">
      <div className="card">
        <div className="card-top">
          {/* <img src={linkImage} alt="" className="w-8 rounded-md" /> */}
          <div>{item.name}</div>
          <div className="bg-black flex items-center justify-center px-2 py-1 rounded-md">
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
          <div className="">Frogtals</div>
          <div className="">#{item.tokenId}</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
