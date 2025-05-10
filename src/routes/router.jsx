
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from '../Components/Layouts/layout';
import SinglePost from "../screens/Post/SinglePost";
import PostViewList from "../screens/Post/PostViewList";
import FavoritePost from '../screens/Liked/FavoritePost';
import Home from "../screens/Home";


const Approuter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path={''} element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/stories/:id" element={<SinglePost/>}/>
          <Route path="/stories" element={<PostViewList/>}/>
          <Route path="/liked" element={<FavoritePost/>} />
        </Route>
        
      </Routes>
    </Router>
    </>
  )
}

export default Approuter;