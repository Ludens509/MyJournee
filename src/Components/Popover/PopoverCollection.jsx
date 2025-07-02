import PropTypes from "prop-types";
import { Popover } from "flowbite-react";
import { CiBookmark } from "react-icons/ci";

const PopoverCollection = ({ contents }) => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          save to collection
        </h3>
      </div>
      {contents?.map((item) => (
        <div className="px-3 py-2 border-b border-gray-200" key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Popover content={content} placement="bottom">
        <button>
          <CiBookmark size={22} />
        </button>
      </Popover>
    </>
  );
};
PopoverCollection.propTypes = {
  contents: PropTypes.any,
};

export default PopoverCollection;
