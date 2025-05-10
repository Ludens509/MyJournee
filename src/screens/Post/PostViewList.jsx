// import LayoutItem from "../../Components/Layouts/LayoutItem";
// import { Outlet } from "react-router-dom";
import PostMenu from "./PostMenu";
import CardPost from "../../Components/Card/CardPost";

const PostViewList = () => {
  return (
    <>
      <section className=" ">
        {/* <div className="flex flex-row  w-full h-full">
          <div className="flex-1 min-w-0 p-6">
            <LayoutItem>
              <main><Outlet/></main> */}
        <PostMenu>
          <main>
            <CardPost />
          </main>
        </PostMenu>
      </section>
    </>
  );
};

export default PostViewList;
