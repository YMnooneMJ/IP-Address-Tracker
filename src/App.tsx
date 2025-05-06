import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const App = () => {
  return (
    <div className="relative h-60 w-full flex justify-center items-center">
      <img
        src="./public/pattern-bg-desktop.png"
        alt=""
        className="h-90  w-screen"
      />
      <div className="absolute flex flex-col items-center justify-center w-1/2 rounded-lg">
        <h1 className="text-white mx-auto font-bold text-3xl ">
          IP Address Tracker
        </h1>
        <form action="">
          <div className="flex items-center justify-center mt-4">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className="border-2 rounded-l-lg border-gray-100 p-3 w-2xl text-gray-600 text-sm bg-gray-100"
            />
            <button className="bg-black text-white p-4 rounded-r-lg flex items-center justify-center">
              <IoIosArrowForward />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
