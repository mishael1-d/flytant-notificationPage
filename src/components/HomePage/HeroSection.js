import React from "react";
import { Input, Space } from "antd";

const { Search } = Input;
function HeroSection() {
  return (
    <div className="heroContainer">
      <div className="hero-title">
        <h1>
          Find{" "}
          <span>
            Influencers
            <br />& Brands
          </span>{" "}
          for collaboration
        </h1>
      </div>
      <div className="hero-input">
        <Search
          className="search-btn"
          placeholder="Try ‘Brand name or Top influencers"
          allowClear
          enterButton="Search"
          size="large"
        />
      </div>
        <div className="popular">
          <p className="popular-title">Popular:</p>
          <span>Top influencers</span>
          <span>Fashion bloggers</span>
          <span>Fashion bloggers</span>
        </div>
        
    </div>
  );
}

export default HeroSection;
