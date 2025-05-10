import {Avatar} from 'flowbite-react';
import Designer from "../../assets/images/Designer.png";
import AvatarProfile from "../../assets/images/profile-Avatar.jpeg";
import MenuStories from '../../Components/MenuStories';

const SinglePost = () => {
  return (
    <>
      <section className="flex flex-col px-[20vw] pt-8 poppins-regular w-full  sm:px-[5vw] justify-center leading-9">
        <div className="ourwork-h1 pt-8 sm:w-full">
          <h1 className="font-bold font-sans text-2xl">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
        </div>

        <p className="italic text-sm font-medium summary py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className='py-3'><MenuStories/></div>
        <div className="bg-purple-500 w-full p-2 h-fit rounded-md">
          <img src={Designer} alt="post-image" />
        </div>
      </section>
      <section className="poppins-regular flex py-4 pl-[20vw] justify-center leading-7 sm:p-[5vw] sm:flex-col-reverse">
        <p className=" w-2/3 poppins-regular sm:w-full text-justify py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quis repellat. Odio porro hic vel nemo aperiam. Temporibus magni
          consectetur, laboriosam minima nesciunt soluta, quaerat, asperiores
          officia fuga modi ab!

        </p>
        <div className=" flex-1 md:w-1/4 px-14 justify-around sm:flex sm:border-b sm:border-gray-200 sm:px-0">
          <div className="flex flex-col border-b border-gray-200 pb-2 sm:justify-center sm:border-none">
            Posted
            <span className="text-sm text-gray-500 dark:text-gray-400">May 05,2024</span>
          </div>
          <div className="border-b border-gray-200 py-4 sm:border-none">
            <Avatar img={AvatarProfile} rounded>
              <div className="space-y-1 font-medium dark:text-white">
                <div>Jess Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </Avatar>
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePost;
