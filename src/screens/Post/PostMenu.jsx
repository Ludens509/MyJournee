import LayoutItem from "../../Components/Layouts/LayoutItem";
// import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

const PostMenu = ({children}) => {
  return (
    <>
      <section className=" px-[10vw] w-full h-[100vh] py-16 mobile:px-[2vw]">
        <div className="flex flex-row  w-full h-full">
          <div className="flex-1 min-w-0 p-6">
            <LayoutItem>
              <main>{children}</main>
                 
            </LayoutItem>
          </div>
          <div className="max-w-[350px] border-l border-gray-300 p-4 mobile:hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            consectetur qui ab a.
          </div>
        </div>
      </section>
    </>
  );
};

PostMenu.propTypes = {
  children: PropTypes.any.isRequired,
};
export default PostMenu;