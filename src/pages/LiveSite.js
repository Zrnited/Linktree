import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import adriana from "../assets/adriana.png";
import Stats from "../components/Stats";
import { AiFillCompass, AiFillBook, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";
import News from "../components/News";
import chemistry from "../assets/chemistry.jpeg";
import physics from "../assets/physics.jpeg";
import biology from "../assets/biology.jpeg";
import mathematics from "../assets/mathematics.jpeg";
import teaching from "../assets/teaching.jpeg";
import jamesbrown from "../assets/jamesbrown.jpeg";
import kateprincess from "../assets/kateprincess.png";
import lesley from "../assets/lesley.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const LiveSite = () => {
  const [aside, setAside] = React.useState(false);
  const [toggle, setToggle] = React.useState({
    join: false,
    unmute: false,
    mute: false,
  });
  // console.log(toggle);

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

  const news = [
    {
      image: chemistry,
      headertext: "Chemistry Hack",
      link: "https://chemistryhack.com",
    },
    {
      image: physics,
      headertext: "Physics Hack",
      link: "https://physicshack.com",
    },
    {
      image: biology,
      headertext: "Biology Hack",
      link: "https://biologyhack.com",
    },
    {
      image: mathematics,
      headertext: "Mathematics Hack",
      link: "https://mathematicshack.com",
    },
  ];

  const tutors = [
    {
      image: jamesbrown,
      name: "James Brown",
      title: "Chemistry Tutor",
    },
    {
      image: kateprincess,
      name: "Kate Princess",
      title: "Physics Tutor",
      height: "184px",
    },
    {
      image: lesley,
      name: "Lesley Charity",
      title: "Mathematics Tutor",
      height: "184px",
    },
  ];

  const faqs = [
    {
      state: toggle.join,
      question: "How can I join a class call?",
      answer:
        "We currently only need a zoom account to be able to join our class calls. Simple click on the button on our website here and enter your zoom details. You will then be taken to the zoom app directly or you can call via your browser",
      name: "join",
    },
    {
      state: toggle.mute,
      question: "Can you unmute me so I can speak to people?",
      answer:
        "Yes definitely! An interactive class is a better class. With this in view, we allow our students to ask questions in class for better understanding of the topics taught and for meet-ups as well.",
      name: "mute",
    },
    {
      state: toggle.unmute,
      question: "How can I pay for virtual classes?",
      answer:
        "We currently don't run virtual classes but good news is that the option will be available as soon as possible. You are free to pay with your dollar card also.",
      name: "unmute",
    },
  ];

  const switchToggle = (id) => {
    // alert('Okay, I dey here!')
    // console.log(id.name)
    const current = id.name;

    if (current === "join") {
      setToggle((prevContact) => ({
        ...prevContact,
        join: !prevContact.join,
        unmute: false,
        mute: false,
      }));
    } else if (current === "mute") {
      setToggle((prevContact) => ({
        ...prevContact,
        mute: !prevContact.mute,
        join: false,
        unmute: false,
      }));
    } else {
      setToggle((prevContact) => ({
        ...prevContact,
        unmute: !prevContact.unmute,
        join: false,
        mute: false,
      }));
    }
    // console.log(current)
  };

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
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col gap-3 items-center max-w-300 cursor-pointer sm:max-w-200 sm:items-start hover:shadow-md"
              >
                <div className="flex gap-2 items-center">
                  <button className={item.className}>
                    <i>{item.icon}</i>
                  </button>
                  <p className="text-base font-bold md:text-lg">
                    {item.header}
                  </p>
                </div>
                <p className="text-center sm:text-left sm:text-sm md:text-base">
                  {item.undertext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="px-6 mt-14">
        <div className="flex gap-3 w-full items-center justify-around mb-6">
          <h1 className="text-center font-bold text-lg sm:text-2xl md:text-left md:text-3xl xl:ml-10">
            Recently added courses
          </h1>
          <div className="tooltipcontainer relative w-20 flex justify-center">
            <Link to={"/news"}>
              <button className="p-1 border-2 border-orange w-20 rounded-lg flex justify-center hover:bg-orange-100 transition delay-100">
                <i>
                  <AiOutlineArrowRight color="orange" />
                </i>
              </button>
            </Link>
            <span className="tooltip bg-black py-2 px-2 rounded-md text-white text-xs absolute -top-10 right-0 opacity-0 transition delay-100 whitespace-nowrap">
              More news
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center sm:flex-row sm:flex-wrap sm:justify-center md:gap-10 lg:gap-4 lg:flex-nowrap xl:gap-10">
          {news?.map((newsitem) => {
            return (
              <News
                image={newsitem.image}
                header={newsitem.headertext}
                link={newsitem.link}
              />
            );
          })}
        </div>
      </section>

      <section className="px-5 py-14 flex justify-evenly md:items-center">
        <div className="flex flex-col gap-2 text-center md:text-left md:w-1/2 md:px-5">
          <p className="text-customOrange font-semibold text-base sm:text-lg">
            Customize with your schedule
          </p>
          <h1 className="text-xl sm:text-3xl">
            Personalized <strong>Profesional 1-on-1 Online Tutor</strong> on
            your <strong className="underline">Schedule</strong>
          </h1>
          <p className="text-sm leading-normal px-3 sm:text-base sm:mt-2 md:px-0">
            Our Scheduling system allows for careful decision-making in terms of
            time and student suitability, with our tutors available in a variety
            of time slos entirely designed around each student's individual
            pace.
          </p>
          <button className="text-white bg-orange-600 px-3 py-2 rounded-lg mt-5 hover:opacity-90 transition delay-100 md:w-32">
            <Link className="text" to={"/"}>
              Get Started
            </Link>
          </button>
        </div>
        <div className="hidden p-2 h-60 md:flex">
          <img
            className="rounded-lg w-auto h-full"
            src={teaching}
            alt="teach-pic"
          />
        </div>
      </section>

      <section className="p-16 bg-zinc-100">
        <p className="text-customOrange font-semibold text-xs tracking-wider text-center uppercase sm:text-base">
          our professional tutors
        </p>
        <h1 className="text-center my-3 sm:text-2xl">
          Meet with our <br />{" "}
          <strong className="capitalize">professional tutors</strong>
        </h1>

        <div className="py-2 mt-5 flex flex-col gap-7 sm:flex-row sm:justify-evenly sm:gap-3 sm:flex-wrap md:justify-center md:gap-20">
          {tutors?.map((tutor, index) => {
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-200 h-184">
                  <img
                    className="rounded-full h-auto w-auto"
                    src={tutor.image}
                    alt="tutor-img"
                  />
                </div>
                <h1 className="capitalize font-bold text-lg tracking-wider">
                  {tutor.name}
                </h1>
                <p className="capitalize">{tutor.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="p-10">
        <div className="flex flex-col gap-5 text-center mb-10 lg:items-center">
          <h1 className="text-2xl font-bold capitalize lg:text-3xl">
            frequently asked questions
          </h1>
          <p className="text-sm lg:text-lg lg:max-w-700">
            You will find here the answers to the frequently asked questions and
            our community guidelines that allow us to study in a motivating and
            secure environment
          </p>
        </div>

        <div className="flex flex-col gap-5 items-center">
          {faqs?.map((faq, index) => {
            return (
              <div
                key={index}
                className={
                  !faq.state
                    ? "px-2 pt-2 border-2 border-lightblue rounded-lg cursor-pointer hover:bg-blue-100 transition delay-100 w-full lg:max-w-700"
                    : "px-2 pt-2 pb-3 border-2 border-lightblue rounded-lg lg:max-w-700"
                }
              >
                <div className="flex justify-between w-full items-center mb-3">
                  <p
                    className={
                      !faq.state
                        ? "text-black lg:text-lg md:pl-2"
                        : "text-black font-bold lg:text-lg md:pl-2"
                    }
                  >
                    {faq.question}
                  </p>
                  <i
                    className="cursor-pointer"
                    onClick={() => switchToggle(faq)}
                  >
                    {!faq.state ? <BiChevronDown /> : <BiChevronUp />}
                  </i>
                </div>
                {faq.state && (
                  <p className="text-sm lg:text-base md:pl-2">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LiveSite;
