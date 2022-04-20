import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import Influencers from "../components/HomePage/Influencers";
import Advertisement from "../components/HomePage/Advertisement";

function Home() {
  return (
    <>
      <div className="heroSection">
        <div className="container-fluid">
          <HeroSection />
          <Influencers />
        </div>
          <Advertisement />
      </div>
    </>
  );
}

export default Home;
