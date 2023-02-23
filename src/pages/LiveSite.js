import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";

const LiveSite = () => {
  const [aside, setAside] = React.useState(false);
  return (
    <>
      <Header aside={aside} setAside={setAside} />
      {aside && <Aside />}

      <section className="w-full flex justify-center mt-20">
        <div className="rounded-lg w-90 p-4 bg-gradient-to-r from-blue-300 to-blue-400 border-none md:flex">
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-3xl">
              Get Quality <strong className="underline italic">1-on-1</strong>{" "}
              <strong>Online Tutoring</strong> from <strong>experts</strong>
            </h1>
            <p className="text-sm">
              Join the largest global student community online and say goodbye
              to lack of motivation. We're here to help you keep focus when
              studying.{" "}
            </p>
            <button className="bg-white p-2 font-semibold rounded-b-lg tracking-wider text-blue-400 md:w-60">
              Get started
            </button>
          </div>
          <div className="hidden md:flex md:w-1/2">Image</div>
        </div>
      </section>
    </>
  );
};

export default LiveSite;
