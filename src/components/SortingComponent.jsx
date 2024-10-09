import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

const NormalSorter = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center text-base">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

const SingleOption = ({ text }) => {
  return (
    <div className="text-black bg-white hover:bg-gray-200 p-2 rounded-md cursor-pointer">
      {text}
    </div>
  );
};

const SortingComponent = ({ item }) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <div>
      <div
        className="flex items-center -ml-1 gap-1 cursor-pointer"
        onClick={() => setOpenOptions(!openOptions)}
      >
        {!openOptions ? (
          <IoMdArrowDropright className="text-2xl" />
        ) : (
          <MdArrowDropDown className="text-2xl" />
        )}
        <div>{item.title}</div>
      </div>

      {openOptions && (
        <div className="mt-2 flex flex-col gap-2">
          {item.items.map((singleItem, idx) => (
            <SingleOption key={idx} text={singleItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export { SortingComponent, NormalSorter };
