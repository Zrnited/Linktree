import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({aside, setAside}) => {
  //links on hamburger menu
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
    {
      name: "Live Site",
      route: "/livesite",
    },
  ];

  return (
    <header className="px-2 py-3 shadow-md fixed top-0 left-0 right-0 bg-white z-30">
      <nav className="flex flex-row items-center justify-between lg:justify-around">
        <div>
          <h1 className="font-semibold text-xl tracking-widest capitalize text-blue-400">
            MyClass.
          </h1>
        </div>
        <div className="hidden sm:flex sm:flex-row items-center gap-3 md:gap-5">
          <ul className="flex flex-row gap-5 w-full">
            {links.map((link, index) => {
              return (
                <li>
                  <Link
                    className="hover:text-blue-400 transition delay-100"
                    key={index}
                    to={link.route}
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-row gap-1">
            <button className="w-24 text-blue-400 font-semibold">Log in</button>
            <button className="w-24 text-white bg-blue-400 rounded-md p-1.5 hover:bg-blue-500 transition delay-100">
              Sign up
            </button>
          </div>
        </div>

        {/* hamburger */}
        <div 
            className="flex sm:hidden"
            onClick={()=>{
                // alert('Hey!');
                setAside(!aside)
                console.log(aside);
            }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ rotate: 90 }}>
            {<GiHamburgerMenu size={"18px"} />}
          </motion.button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
