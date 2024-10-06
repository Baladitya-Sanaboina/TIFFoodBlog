import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 h-auto overflow-hidden">
      {" "}
      {/* Change h-screen to h-auto */}
      <div className="flex px-12 flex-col justify-start gap-20 pt-5 pb-5 md:order-1 order-2">
        <div className="w-[13%] hidden md:block">
          <img
            src="https://res.cloudinary.com/dbylngblb/image/upload/v1728123150/33af368e1471bcf0efe704356a08337d_ab9wxl.png"
            alt="logo"
            className="max-w-full h-auto" // Ensures image doesn’t overflow
          />
        </div>
        <div className="items-center text-center md:items-start md:text-left flex flex-col gap-5 md:gap-8 overf-flow-container">
          <h1 className="font-bold text-[48px] md:text-[70px] text-[#0E2368] leading-[46px] md:leading-[69px] overflow-hidden">
            Discover the <br />
            <span className="text-[#E23744]">Best</span> Food{" "}
            <br className="hidden md:block" /> And Drinks
          </h1>
          <p className="font-medium text-[11px] md:text-[16.44px] text-[#444957]">
            Naturally made Healthcare Products for the <br /> better care &
            support of your body.
          </p>
          <button className="bg-[#E23744] md:w-[35%] text-[12px] md:text-[18px] rounded-3xl text-white px-5 py-2">
            Explore Now!
          </button>
        </div>
      </div>
      <div className="md:order-2 h-full w-full order-1 relative overflow-hidden">
        <img
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1728125467/Rectangle_400_zhyxlm.png"
          alt="pizzaImage"
          className="object-cover max-w-full h-auto" // Ensures image doesn’t overflow
        />
        <img
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1728149219/curve_ravyay.png"
          alt="red pizza vector"
          className="absolute top-0"
        />
        <button className="absolute text-[11px] md:text-[16px] top-3 right-3 md:top-5 md:right-10 border border-white text-white bg-opacity-0 rounded-3xl px-5 py-2">
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
