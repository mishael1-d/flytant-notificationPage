import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Influencers from "../components/HomePage/Influencers";
import Advertisement from "../components/HomePage/Advertisement";

function Home() {
  return (
    <>
      <div>
          <HeroSection />
          <Influencers />
          <Advertisement />
      </div>
    </>
  );
}

export default Home;
