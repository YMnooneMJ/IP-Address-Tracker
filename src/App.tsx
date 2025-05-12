import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import SimpleMap from "./components/SimpleMap";
type IpAddressData = {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    lat: number;
    lng: number;
    timezone: string;
  };
};

const App = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [ipAddressData, setIpAddressData] = useState<IpAddressData | null>(
    null
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setIpAddress(event.target.value);
  };

  const fetchIpAddress = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_QUJo41E37FFQCkmrvBSZOWw3WzKxA&ipAddress=${ipAddress}`
      );
      const data = await res.json();
      console.log("data:", data);
      setIpAddressData(data);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  return (
    <main className="w-full flex flex-col items-center">
      <div className="relative w-full flex flex-col items-center">
        {/* Background Image */}
        <img
          src="./public/pattern-bg-desktop.png"
          alt=""
          className="w-full h-72 md:h-72 lg:h-80 object-cover absolute top-0 left-0"
        />
        {/* Header & Search */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full py-8 px-4 md:py-10">
          <h1 className="text-white font-bold text-xl  md:text-3xl text-center">
            IP Address Tracker
          </h1>
          <form
            onSubmit={fetchIpAddress}
            className="w-full max-w-md md:max-w-xl mt-4"
          >
            <div className="flex w-full">
              <input
                onChange={handleInputChange}
                type="search"
                placeholder="Search for any IP address or domain"
                className="flex-1 text-gray-600 text-sm font-medium bg-gray-100 border-2 rounded-l-lg border-gray-100 p-3"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-3 rounded-r-lg hover:bg-gray-800 transition-colors"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </form>
        </div>
        {/* Info Card - Responsive */}
        <div className="bg-white flex flex-col md:flex-row justify-around items-center md:mt-18 px-4 md:px-6 py-10 z-10 w-[90%] md:max-w-4xl top-[18rem] md:top-[20rem] shadow-xl rounded-xl gap-6 md:gap-0 text-center md:text-left">
          {/* IP Address */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-400 font-bold text-xs">IP ADDRESS</h3>
            <p className="text-gray-800 text-base md:text-xl font-semibold">
              {ipAddressData?.ip || "---"}
            </p>
          </div>
          {/* divider */}
          <div className="hidden md:block w-[1px] bg-gray-300 h-14 mx-4" />
          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-400 font-bold text-xs">LOCATION</h3>
            <p className="text-gray-800 text-base md:text-xl font-semibold">
              {ipAddressData?.location.region || "---"}
              {ipAddressData?.location.country}
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-gray-300 h-14 mx-4" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-400 font-bold text-xs">TIMEZONE</h3>
            <p className="text-gray-800 text-base md:text-xl font-semibold">
              {ipAddressData?.location.timezone || "---"}
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-gray-300 h-14 mx-4" />
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-gray-400 font-bold text-xs">ISP</h3>
            <p className="text-gray-800 text-base md:text-xl font-semibold">
              {ipAddressData?.isp || "---"}
            </p>
          </div>
        </div>
      </div>
      <div>
        {ipAddressData && (
          <SimpleMap
            latitude={ipAddressData?.location.lat}
            longitude={ipAddressData?.location.lng}
          />
        )}
      </div>
    </main>
  );
};

export default App;
