// import { Link } from 'react-router-dom'
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../utils/firebase';
// import Img from '../assets/images/download(pie22).jpeg';
import Spline from "@splinetool/react-spline";
// import HeroImage from '../assets/images/heroImage.jpg';
function Home() {
  // // sign in with google
  // const googleProvider = new GoogleAuthProvider();
  // const GoogleLogin = async() => {
  //   try {
  //     const result = await signInWithPopup(auth, googleProvider)
  //     console.log(result.user);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <>
      <section className="block--container">
        
        <h1 className="text-center">Home</h1>
        <div className=" flex px-8 py-4 mx-auto space-y-0 sm:flex-col ">
          {/* <ul> */}
          {/* <li> */}
          {/* <Link to="/">Home</Link> */}
          {/* </li> */}
          {/* <li> */}
          {/* <Link to="/posts">Posts</Link> */}
          {/* </li> */}
          {/* </ul> */}
          {/* ---Left--- */}
          <div className="ml-8 space-y-10 w-1/2 sm:w-full sm:ml-2">
            <div className="background-container">
              <h1 className="text--box font-medium text-2xl mt-12">
                Write Your Ways Through Life`s Adventures.
              </h1>
            </div>
            <p className="poppins-regular mr-20">
              Manage make it simple for software teams to plan day-to-daytask
              while keeping the larger team goals in view.
            </p>
            <button
              onClick={""}
              className=" p-3 px-6 pt-2 text-white bg-purple-400 hover:bg-purple-600 rounded-full baseline "
            >
              Get started
            </button>
          </div>
          {/* ---Right--- */}
          <div className="  w-1/2 bg-[#D4C0B8]">
            {/* <img src={Img} alt='image_thumbnail' className='w-8/12 sm:hidden' />
             */}
            <div className=" sm:hidden sm:flex-row">
              <Spline scene="https://prod.spline.design/IzDBUKdMuk8WH22V/scene.splinecode" />
            </div>
          </div>
        </div>
        <div className="global">
          <div className="ourwork">
            <h1 className="ourwork-h1 poppins-regular">
              We create beautiful and fast web services
            </h1>
          </div>

          <div className="banner flex text-center bg-purple-800 w-full h-[285px]">
            <div className=" self-center absolute left-[30%] sm:left-[23%] sm:text-base sm: m-4 sm:sticky">
              <h1 className="montserrat-semibold">
                MyJournee where stories unfold.
              </h1>
              <p className="text-sm ">
                {" "}
                The idea behind <b>MyJournee </b> is to have a diary wher you
                can unfold all your stories.
              </p>
            </div>
            {/* <img src={HeroImage} alt="banner"  className='banner-img opacity-20' /> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
