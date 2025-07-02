import React from "react";
import ImageTest from "../../assets/images/profile-Avatar.jpeg";
import PopoverCollection from "../Popover/PopoverCollection";
import PopoverTools from "../Popover/PopoverTools";
import { CgHeart } from "react-icons/cg";
import PropTypes from "prop-types";
import { FcLike } from "react-icons/fc";

const CardPost = ({ data }) => {
  const [likedPosts, setLikedPosts] = React.useState({});

  // function Like(status) {
  //   const likeBtn = status ? <FcLike size={22} /> : <CgHeart size={22} />;
  //   return likeBtn;
  // }

  const handleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    console.log(`Post ${id} liked status:`, !likedPosts[id]);
  };

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
                  <PopoverCollection contents={data} />
                </span>
                <button
                  title="btn-like"
                  type="button"
                  onClick={() => handleLike(item.id)}
                >
                  {likedPosts[item.id] ? (
                    <FcLike size={22} />
                  ) : (
                    <CgHeart size={22} />
                  )}
                </button>
                {/* <button
                  title="btn-like"
                  type="button"
                  onClick={() => setFavPost(!favPost)}
                >
                  <Like status={item.like} />
                </button> */}

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
