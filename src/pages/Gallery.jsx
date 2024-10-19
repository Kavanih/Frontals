import Navbar from "../components/Navbar";
import { NormalSorter, SortingComponent } from "../components/SortingComponent";
import { FaSortNumericDown, FaSortNumericDownAlt } from "react-icons/fa";
import { sorts } from "../constants/sorts";
import GalleryCard from "../components/GalleryCard";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { metadata } from "../constants/metadata";

const Gallery = () => {
  const [openSort, setOpenSort] = useState(false);
  const [query, setQuery] = useState("");
  const [metas, setMetas] = useState(metadata);

  const filterData = () => {
    const newData = metas.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.tokenId.toLowerCase().includes(query.toLowerCase())
      );
    });

    return newData;
  };

  return (
    <div>
      <Navbar />

      <div className="gallery-top">
        <div className="gallery-title">Frogtals</div>

        <div
          className="cursor-pointer md:hidden w-10 h-10 flex items-center justify-center border border-white rounded-md"
          onClick={() => setOpenSort(!openSort)}
        >
          {!openSort ? <FiMenu /> : <LiaTimesSolid />}
        </div>
      </div>

      <div className="search">
        {/* <div className={`search-left no-scrollbar ${openSort ? "active" : ""}`}>
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
        </div> */}

        <div>
          <div className="flex justify-center py-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-gray-300 w-full max-w-lg py-2 px-4 rounded-md outline-green-500"
              placeholder="Search Token by name or token id"
            />
          </div>
          <div className="search-right no-scrollbar">
            {filterData().map((item, idx) => (
              <GalleryCard key={idx} item={item} index={idx + 1} />
            ))}
          </div>

          {filterData() < 1 && (
            <div className="text-center text-4xl text-black">
              No Token found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
