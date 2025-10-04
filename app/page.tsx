import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Rooms from "./components/Rooms";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import BookNowCat from "./components/BookNowCat";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Experience/>
      <Rooms/>
      <Amenities/>
      <Gallery />
      <BookNowCat />
    </div>
  );
};

export default page;
