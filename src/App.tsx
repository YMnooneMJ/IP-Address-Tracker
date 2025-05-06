import React from "react";

const App = () => {
  return (
    <div className="h-60 w-full flex justify-center items-center">
        <img src="./public/pattern-bg-desktop.png" alt="" className="h-90 relative w-screen" />
      <div className="absolute flex flex-col items-center justify-center w-1/2 rounded-lg">
        <h1 className="text-white mx-auto font-bold text-3xl ">
          IP Address Tracker
        </h1>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="border-2 rounded-lg border-gray-100 p-2 mt-4 w-2xl text-gray-600 text-sm bg-gray-100"
        />
      </div>
    </div>
  );
};

export default App;
