import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import adriana from "../assets/adriana.png";
import Stats from "../components/Stats";
import { AiFillCompass, AiFillBook } from "react-icons/ai";
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const LiveSite = () => {
  const [aside, setAside] = React.useState(false);

  const stats = [
    {
      number: "8,200",
      text: "Success stories",
      sidebar: true,
    },
    {
      number: "10,204",
      text: "Expert Instructor",
      sidebar: true,
    },
    {
      number: "50,927",
      text: "Hours Tutored",
      sidebar: true,
    },
    {
      number: "72,012",
      text: "Active Student",
      sidebar: false,
    },
  ];

  const expertise = [
    {
      icon: <AiFillCompass color="orange" />,
      header: "1-on-1 Tutoring",
      undertext:
        "All of our Special Education Experts have a Degree in Special Education",
      className: "p-2 bg-orange-200 rounded-full text-lg",
    },
    {
      icon: <BsFillHeartFill color="blue" />,
      header: "Lifetime Accesss",
      undertext: "You have a lifetime access to all the learning resources",
      className: "p-2 bg-blue-200 rounded-full text-lg",
    },
    {
      icon: <BsFillPersonFill color="green" />,
      header: "Active Learning",
      undertext: "You have a lifetime access to all the learning resources",
      className: "p-2 bg-green-200 rounded-full text-lg",
    },
    {
      icon: <AiFillBook color="pink" />,
      header: "Over 200 courses",
      undertext: "You have a lifetime access to all the learning resources",
      className: "p-2 bg-pink-100 rounded-full text-lg",
    },
  ];

  // console.log(stats);
  return (
    <>
      <Header aside={aside} setAside={setAside} />
      {aside && <Aside />}

      <section className="w-full flex flex-col items-center mt-16 lg:mt-20">
        <div className="rounded-lg w-90 px-4 pt-5 pb-5 bg-gradient-to-r from-blue-300 to-blue-400 border-none md:flex md:justify-center md:pb-0 lg:w-80">
          <div className="flex flex-col gap-4 md:w-1/2 md:justify-center lg:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-tight">
              Get Quality <strong className="underline italic">1-on-1</strong>{" "}
              <strong>Online Tutoring</strong> from <strong>experts</strong>
            </h1>
            <p className="text-sm md:text-base">
              Join the largest global student community online and say goodbye
              to lack of motivation. We're here to help you keep focus when
              studying.{" "}
            </p>
            <button className="bg-white p-2 font-semibold rounded-b-lg tracking-wider text-blue-400 md:w-60 opacity-80 hover:opacity-100 transition delay-100">
              Get started
            </button>
          </div>
          <div className="hidden md:flex h-400 lg:h-450">
            <img className="h-full w-auto" src={adriana} alt="adriana" />
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-6 items-center justify-center mt-5 px-5 md:gap-10">
          {stats?.map((stat) => {
            return (
              <Stats
                number={stat.number}
                text={stat.text}
                sidebar={stat.sidebar}
              />
            );
          })}
        </div>
      </section>

      <section className="mt-14 px-5">
        <div className="flex flex-col gap-2 items-center mb-10 lg:mb-20">
          <h3 className="uppercase font-bold text-sm text-customOrange lg:text-base">
            why choose us?
          </h3>
          <h1 className="text-2xl max-w-300 text-center lg:text-3xl lg:max-w-400">
            <strong>Benefits</strong> of Online Tutoring service at{" "}
            <strong className="underline italic">MyClass</strong>
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-3 sm:items-start sm:justify-around">
          {expertise?.map((item) => {
            return (
              <motion.div whileHover={{scale: 1.1}} className="flex flex-col gap-3 items-center max-w-300 cursor-pointer sm:max-w-200 sm:items-start hover:shadow-md">
                <div className="flex gap-2 items-center">
                  <button className={item.className}>
                    <i>{item.icon}</i>
                  </button>
                  <p className="text-base font-bold md:text-lg">{item.header}</p>
                </div>
                <p className="text-center sm:text-left sm:text-sm md:text-base">
                  {item.undertext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 mt-10">
        <h1 className="text-center font-bold text-2xl sm:text-left ml-12 md:text-4xl">Recently added courses</h1>
      </section>
    </>
  );
};

export default LiveSite;
