// import { Card } from "flowbite-react";
import ImageTest from "../../assets/images/profile-Avatar.jpeg";
import PopoverCollection from "../Popover/PopoverCollection";
import PopoverTools from "../Popover/PopoverTools";
import { GrFavorite } from "react-icons/gr";
// import { FcLike } from "react-icons/fc";
import PropTypes from "prop-types";

const CardPost = ({ data }) => {
  return (
    <>
      <article>
        {data.map((item) => (
          <div
            key={item.id}
            className="grid grid-rows-02  gap-1 rounded-xl  hover:scale-101 transition-transform duration-[500ms] ease-in-out backdrop-blur-[100px] border border-solid-[rgba(255,255,255,0.4)]  shadow-[rgba(255,255,255,0.90)] w-full h-fit p-4 my-4"
          >
            <div className="test- row-span-1 col-span-1 py-2 mx-2">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-base">
                {item.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 sm:hidden">
                {item.description}
              </p>
            </div>
            <div className="test- row-span-1 col-span-1 flex justify-between py-3 mx-2  sm:text-sm sm:col-span-2">
              <span> posted: {item.dateposted}</span>
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
              {/* <img src={ImageTest} alt="img-post" /> */}
              {item.image && <img src={ImageTest} alt="img-post" />}
            </div>
          </div>
        ))}
      </article>
    </>
  );
};
CardPost.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      dateposted: PropTypes.string,
      image: PropTypes.any,
    })
  ),
};

export default CardPost;
