import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-6 py-4 md:py-10 bg-zinc-100">
      <div className="flex flex-col gap-5 md:flex-row md:justify-evenly lg:justify-center lg:gap-14">
        <div>
          <h1 className="font-semibold text-2xl">Connect with us.</h1>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Menu</h1>
          <div className="h-0.5 w-20 bg-black"></div>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h1 className="font-bold text-lg">Contact</h1>
          <div className="h-0.5 w-52 bg-black"></div>
          <ul>
            <li>
              No. 78, Brooklyn Street, <br />
              New Jersey, United Kingdom
            </li>
            <li>infancier@gmail.com</li>
            <li>+2346789798098</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg">Social</h1>
          <div className="h-0.5 w-28 bg-black"></div>
          <ul className="flex gap-3 mt-2">
            <li>
              <a
                href="https://facebook.com/myschool"
                target={"_blank"}
                rel="noreferrer"
              >
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/myschool"
                target={"_blank"}
                rel="noreferrer"
              >
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/myschool"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/myschool"
                target={"_blank"}
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
        <p className="text-center font-semibold text-sm">
          {" "}
          2023 all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
