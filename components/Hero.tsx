import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-hero-pattern w-full bg-cover h-[800px] bg-blend-multiply relative hover:backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-black bg-opacity-70 md:bg-opacity-40 flex flex-col items-center justify-center text-white space-y-2 p-5 ">
         <h1 className="text-4xl text-center md:text-7xl font-poppins font-bold ">Welcome to Matdan  </h1>
         <h2 className="text-xl text-center md:text-2xl font-ubuntu font-extralight">An online voting platform to raise your voice and have a say in the choosing your leader.</h2>
        </div>

      </div>
    </>
  );
};

export default Hero;
