import React from "react";
import Highlights from "../Components/WhyUs/Highlights";
import AboutUs from "../Components/AboutUs/AboutUs";
import Will from "../Components/Will/Will";
import About from "../Components/WhyUs/About";

export default function about() {
  return (
    <div className='overflow-hidden'>
      <AboutUs />
      <About />
      <Highlights />
      <Will />
    </div>
  );
}
