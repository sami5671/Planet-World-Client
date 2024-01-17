import banner from "../../assets/weather1.jpg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdWaves } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { BsFillCloudHaze2Fill } from "react-icons/bs";
import { TiWeatherStormy } from "react-icons/ti";
import { BsFillSunsetFill } from "react-icons/bs";
import { WiSunrise } from "react-icons/wi";
import { GiWindSlap } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";

import moment from "moment";

import { useState } from "react";

const Weather = () => {
  // =================================================================
  const api = {
    key: "c976ba7c74bc04699da8a1784e61b715",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  // ========================Sunrise and sunset=========================================
  const sunriseTimestamp = weather?.sys?.sunrise;
  const sunsetTimestamp = weather?.sys?.sunset;

  // Convert Unix timestamps to milliseconds
  const sunriseMillis = sunriseTimestamp * 1000;
  const sunsetMillis = sunsetTimestamp * 1000;

  // Create Date objects
  const sunriseDate = new Date(sunriseMillis);
  const sunsetDate = new Date(sunsetMillis);

  // Function to format time in HH:mm AM/PM
  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (12:00 AM)

    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  // Format sunrise and sunset times
  const formattedSunrise = formatTime(sunriseDate);
  const formattedSunset = formatTime(sunsetDate);

  //   console.log("Sunrise:", formattedSunrise);
  //   console.log("Sunset:", formattedSunset);
  // ===================wind & visibility==============================================
  const visibilityMeters = weather?.visibility;
  const visibilityKilometers = visibilityMeters / 1000;
  //   console.log(visibilityKilometers);

  const windSpeed = weather?.wind?.speed;
  //   console.log(windSpeed);
  //   =================================================================
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
          <div className="mt-12 lg:mt-24 mr-auto px-8 lg:px-32 text-center flex flex-col lg:flex-row lg:gap-24 gap-5">
            <div className="text-white">
              {/* location */}
              {/* <p className="text-2xl lg:text-3xl underline mb-4">Weather</p> */}
              <p className="">
                <span className="text-4xl lg:text-5xl flex gap-2 items-center mb-2 font-bold">
                  <TiWeatherPartlySunny /> <span>{weather?.main?.temp}°C</span>
                </span>
                <span className="flex gap-2 items-center font-bold text-2xl">
                  <span>
                    <MdWaves />
                  </span>
                  Feels Like
                </span>
                <span className="flex gap-2 items-center">
                  <TiWeatherPartlySunny />
                  <span>{weather?.main?.feels_like}°C</span>
                </span>
                <span className="flex gap-2 items-center">
                  <BsFillCloudHaze2Fill />
                  {weather?.weather?.[0]?.main}
                </span>
                <span className="flex gap-2 items-center">
                  <FaLocationDot />
                  {weather.name}, {weather?.sys?.country}
                </span>
              </p>
              {/*temperature  */}
            </div>
            <div className="text-white">
              {/* location */}
              {/* <p className="text-2xl lg:text-3xl underline mb-4">Feels Like</p> */}
              <p className="">
                <span className="flex gap-2 items-center text-3xl lg:text-5xl font-bold underline mt-6 lg:mt-0 mb-5">
                  <span>
                    <TiWeatherStormy />
                  </span>
                  Others
                </span>

                <span className="flex gap-1 items-center ">
                  <span className="flex items-center text-4xl">
                    <WiHumidity />
                  </span>
                  <span className="text-xl">
                    Humidity: {weather?.main?.humidity} %
                  </span>
                </span>
                <span className="flex gap-1 items-center text-4xl">
                  <WiSunrise />
                  <span className="text-xl">
                    Sunrise:
                    <span className="font-bold"> {formattedSunrise}</span>
                  </span>
                </span>
                <span className="flex gap-1 items-center text-4xl">
                  <BsFillSunsetFill />
                  <span className="text-xl">
                    Sunset:
                    <span className="font-bold"> {formattedSunset}</span>
                  </span>
                </span>
              </p>
              {/*temperature  */}
              <p></p>
            </div>

            {/* 3rd */}
            <div className="text-white">
              {/* location */}
              {/* <p className="text-2xl lg:text-3xl underline mb-4">Feels Like</p> */}
              <p className="">
                <span className="flex gap-2 items-center text-2xl lg:text-5xl font-bold underline mt-4 lg:mt-0 mb-5">
                  <span>
                    <TiWeatherStormy />
                  </span>
                  Wind & Visibility
                </span>

                <span className="flex gap-2 items-center ">
                  <span className="flex items-center text-3xl">
                    <GiWindSlap />
                  </span>
                  <span className="text-xl">
                    Wind Speed:
                    <span className="font-bold"> {windSpeed} K/h</span>
                  </span>
                </span>
                <span className="flex gap-2 items-center text-3xl mt-3">
                  <MdVisibility />
                  <span className="text-xl">
                    Visibility:
                    <span className="font-bold ml-2">
                      {visibilityKilometers} K/M
                    </span>
                  </span>
                </span>
              </p>
              {/*temperature  */}
              <p></p>
            </div>
          </div>
        </div>
      </div>

      {/* section for weather  */}
    </div>
  );
};

export default Weather;
