import Faq from "@/components/faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <>
      <Hero></Hero>
      <div className="w-5/6 mx-auto md:w-1/2 py-10 text-left">
        <Faq></Faq>
      </div>
    </>
  );
};

export default page;
