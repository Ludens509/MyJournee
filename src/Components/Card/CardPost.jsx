// import { Card } from "flowbite-react";
import ImageTest from "../../assets/images/profile-Avatar.jpeg";
import PopoverCollection from "../Popover/PopoverCollection";
import PopoverTools from "../Popover/PopoverTools";
import { GrFavorite } from "react-icons/gr";
// import { FcLike } from "react-icons/fc";

const CardPost = () => {
  return (
    <>
      <article>
        <div
          className="grid grid-rows-02  gap-1 border-b border-gray-300 w-full h-fit py-4"
        >
          <div className="test- row-span-1 col-span-1 py-2 mx-2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-base">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 sm:hidden">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div className="test- row-span-1 col-span-1 flex justify-between py-3 mx-2  sm:text-sm sm:col-span-2">
            <span> posted: May 24, 2024</span>
            <div className="flex justify-between  gap-6">
              <span>
                <PopoverCollection />
              </span>
              <span>
                <GrFavorite size={22} />
              </span>
              <span>
                <PopoverTools />
              </span>
            </div>
          </div>

          <div className="grid--disposition  max-w-28 ml-[60px] sm:ml-0">
            <img src={ImageTest} alt="img-post" />
          </div>
        </div>
      </article>
    </>
  );
};

export default CardPost;
