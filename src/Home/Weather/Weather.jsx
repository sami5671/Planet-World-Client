import banner from "../../assets/weather1.jpg";

import { useState } from "react";

const Weather = () => {
  // =================================================================
  const api = {
    key: "c976ba7c74bc04699da8a1784e61b715",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const handleSearch = () => {
    // console.log("handleSearch", search);
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };
  // =================================================================
  return (
    <div>
      <h1 className="text-white mb-10">Hello Bangladesh</h1>

      {/* section for weather  */}
      <div className="relative bg-cover bg-center h-screen md:h-96 lg:h-screen flex items-center justify-center">
        <img
          className="absolute w-full h-full object-cover object-center opacity-90"
          src={banner}
          alt="Banner"
        />

        <div className="absolute bg-slate-900 bg-opacity-60 w-full h-full rounded-md flex flex-col items-center">
          <div className="mt-12">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Enter your city/Town..."
              className="h-[39px] lg:h-[40px] lg:w-[700px] rounded-md text-center border-2 border-lime-500 font-bold font-Rancho text-2xl"
            />
            <button
              className="py-2 px-2 lg:px-6 lg:py-2  rounded-md ml-4 bg-lime-600 text-white font-bold transition duration-300 ease-in-out hover:bg-lime-500"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="text-white">
            {/* location */}
            <p>{weather.name}</p>

            {/*temperature  */}
            <p>lore</p>
          </div>
        </div>
      </div>

      {/* section for weather  */}
    </div>
  );
};

export default Weather;
