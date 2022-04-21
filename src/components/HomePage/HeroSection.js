import React from "react";
import { Input } from "antd";
import {useNavigate} from 'react-router-dom'

const { Search } = Input;
function HeroSection() {
  const navigate = useNavigate()
  const onSearch =()=> {
    navigate('/search')
  }
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
          onSearch={onSearch}
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
