import Navbar from "../components/Navbar";
import { NormalSorter, SortingComponent } from "../components/SortingComponent";
import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import { sorts } from "../constants/sorts";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  return (
    <div>
      <Navbar />

      <div className="gallery-top">
        <div className="gallery-title">Frogtails</div>
      </div>

      <div className="search">
        <div className="search-left no-scrollbar">
          <div className="">
            <div>Search</div>
            <input
              type="text"
              placeholder="🔍 Search by token id e.g., 4003"
              className="bg-black rounded-md w-full p-2 text-white"
            />
          </div>

          <div className="mt-2">
            <div>Sort by</div>

            <div className="flex flex-col gap-2">
              <NormalSorter
                icon={<FaSortNumericDown />}
                text={"Rarity (ASC)"}
              />
              <NormalSorter icon={<FaSortNumericDownAlt />} text={"Token ID"} />
              <NormalSorter icon={<FaSortNumericDown />} text={"Token ID"} />
            </div>

            <div className="option-sorts">
              {sorts.map((item) => (
                <SortingComponent item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
        <div className="search-right no-scrollbar">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <GalleryCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
