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

  const fetchIpAddress = async (e) => {
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
    <main className="h-60 w-full flex justify-center items-center">
      <div className="relative h-full mt-20 flex flex-col items-center justify-center w-full rounded-lg">
        <img
          src="./public/pattern-bg-desktop.png"
          alt=""
          className="h-80 absolute w-full "
        />
        <div className="relative z-3 flex  justify-center items-center flex-col h-60 w-full">
          <h1 className="text-white mx-auto font-bold  text-3xl ">
            IP Address Tracker
          </h1>
          <form onSubmit={fetchIpAddress}>
            <div className="items-center justify-center mt-4">
              <input
                onChange={handleInputChange}
                type="search"
                placeholder="Search for any IP address or domain"
                className="text-gray-600 text-sm font-semibold bg-gray-100 border-2 rounded-l-lg border-gray-100 p-3 w-[30rem]"
              />
              <button
                type="submit"
                className="bg-black text-white p-4 rounded-r-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white flex justify-around items-center p-3 z-4 absolute -bottom-28 w-[70%] shadow-xl rounded-xl h-32">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-400 font-bold text-xs">IP ADDRESS</h3>
            <p className="text-gray-800 text-3xl font-semibold flex items-center justify-center">
              {ipAddressData?.ip || "---"}
            </p>
          </div>
          <div className="text-red-900 w-[0.8px] bg-gray-300 text-2xl h-full ml-20 " />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-400 font-bold text-xs">LOCATION</h3>
            <p className="text-gray-800 text-3xl font-semibold flex items-center justify-center">
              {ipAddressData?.location.region || "---"}
              {ipAddressData?.location.country}
            </p>
          </div>
          <div className="text-red-900 w-[0.8px] bg-gray-300 text-2xl h-full ml-20 " />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-400 font-bold text-xs">TIMEZONE</h3>
            <p className="text-gray-800 text-3xl font-semibold flex items-center justify-center ">
              {ipAddressData?.location.timezone || "---"}
            </p>
          </div>
          <div className="text-red-900 w-[0.8px] bg-gray-300  text-2xl h-full ml-20 " />
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-gray-400 font-bold text-xs">ISP</h3>
            <p className="text-gray-800 text-3xl font-semibold flex items-center justify-center">
              {ipAddressData?.isp || "---"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
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
