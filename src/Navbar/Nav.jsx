import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
const Nav = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNavbar(false);
      } else {
        // Scroll Up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <Navbar
        fluid
        rounded
        className={`fixed w-full border-b border-gray-200  transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="transition-transform duration-[100ms] ease-in-out">
          <div className="flex items-center">
            <Navbar.Link href="#">Home</Navbar.Link>
          </div>
          <div className="flex items-center">
            <Navbar.Link href="#">About</Navbar.Link>
          </div>
          <Navbar.Link>
            <div className="flex md:order-2">
              <button className=" flex items-center justify-center btn--start p-3 px-6  text-white bg-[#A1683B] hover:z-0  rounded-full relative ">
                Get started
              </button>
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Nav;
