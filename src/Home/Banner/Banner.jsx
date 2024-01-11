import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="">
      {/* banner  */}
      <div className="relative bg-cover bg-center h-80 md:h-96 lg:h-screen flex items-center">
        <img
          className="absolute w-full h-full object-cover object-center"
          src={banner}
          alt="Banner"
        />

        <div className="absolute flex items-start justify-center w-1/2">
          <div className="px-2 lg:ml-6">
            <h2 className="text-2xl lg:text-7xl uppercase mt-2 mb-4 text-lime-700">
              Organize Your Home & Office with live tree
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[18px] text-white">
              Live Tree transforms your home and office organization. Experience
              the perfect blend of nature and functionality with eco-friendly
              storage solutions. From stylish furniture to smart organizers,
              Live Tree elevates your space, creating a harmonious environment
              that enhances productivity and tranquility.
            </p>
            <button className="px-8 py-1 mt-3 font-Rancho text-xl text-white rounded-br-full bg-lime-400 hover:bg-white hover:text-black hover:border-2 hover:border-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* banner */}

      <section className="grid lg:grid-cols-4 lg:px-24 py-6 gap-12 bg-[#ECEAE3] text-[#331A15]">
        <div>
          <img src="https://imgur.com/okufz1K.png" alt="" />
          <h1>Awesome Aroma</h1>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="https://imgur.com/bplYGk1.png" alt="" />
          <h1>High Quality</h1>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src="https://imgur.com/m6PxEuG.png" alt="" />
          <h1>Pure Grades</h1>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src="https://imgur.com/EcoaXmq.png" alt="" />
          <h1>Proper Roasting</h1>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </section>
    </section>
  );
};

export default Banner;
