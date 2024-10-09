import { Link } from "react-router-dom";
import CardImage from "../assets/1.JPG";
import linkImage from "../assets/img/link-image.png";

const GalleryCard = () => {
  return (
    <div className="">
      <div className="card">
        <div className="card-top">
          <img src={linkImage} alt="" className="w-8 rounded-md" />
          <div className="bg-black flex items-center justify-center px-2 py-1 text-white rounded-md">
            #1
          </div>
        </div>

        <div>
          <Link to={"/token/usjkk89"}>
            <img
              src={CardImage}
              alt=""
              className="w-full object-cover h-full"
            />
          </Link>
        </div>

        <div className="card-top">
          <div className="text-white">Frogtails</div>
          <div className="text-white">#1100</div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
