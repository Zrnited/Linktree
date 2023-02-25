import React from "react";
import { Link } from "react-router-dom";
import { AiFillAccountBook, AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";

const Aside = () => {

    //links on hamburger menu
  const links = [
    {
      name: "Home",
      route: "/",
      icon: <AiFillHome />
    },
    {
      name: "Services",
      route: "/about",
      icon: <AiFillAccountBook /> 
    },
    {
      name: "Contact",
      route: "/contact",
      icon: <AiFillPhone />
    },
    {
      name: "About Us",
      route: "/aboutus",
      icon: <BsFillInfoCircleFill /> 
    },
  ];

  return (
    <aside className="fixed left-0 top-0 w-1/2 bottom-0 bg-slate-200 shadow-md sm:hidden z-20">
      <div className="pt-5 flex flex-col h-full gap-2">
        <div>
          <h1 className="font-semibold text-xl tracking-widest capitalize text-blue-400 text-center">
            MyClass
          </h1>
        </div>

        <div className="flex flex-col justify-between h-5/6 items-center gap-3">
          <ul className="flex flex-col p-3 gap-3 w-full">
            {links.map((link, index) => {
              return (
                <li className="px-2 py-1 rounded-sm hover:bg-blue-300 hover:text-white transition delay-100 cursor-pointer flex flex-row gap-3 items-center">
                    <i>{link.icon}</i>
                  <Link
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

          <div className="flex flex-col gap-3 w-full items-center">
            <button className="w-24 text-blue-400 font-semibold">Log in</button>
            <button className="w-5/6 text-white bg-blue-400 rounded-md p-1.5 hover:bg-blue-500 transition delay-100">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
