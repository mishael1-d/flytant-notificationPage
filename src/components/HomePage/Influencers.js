import React, { useRef } from "react";
import { influencersData } from "../../influencersData";
import { Carousel } from "antd";
import fbVector from "../../assets/fb-vector.png";
import linkVector from "../../assets/link-vector.png";
import instaVector from "../../assets/insta-vector.png";
import youtubeVector from "../../assets/youtube-vector.png";
import back from "../../assets/back-btn.png";
function Influencers() {
const slider = useRef(null)
  return (
    <div className="influencerContainer">
      <h3>Featured Influencers</h3>
      <div className="influencer-details">
        {influencersData.map((influencer) => {
          return (
            <Carousel ref={slider}>
            <div className="influencers" key={influencer.id}>
              <div className="influencer-image">
                <img src={influencer.image} alt="" />
              </div>
              <div className="influencer-info">
                <span className="influencer-name">{influencer.name}</span>
                <span className="influencer-location">
                  {influencer.location}
                </span>
              </div>
              <div className="sm-icons">
                <img src={instaVector} alt="" />
                <img src={fbVector} alt="" />
                <img src={linkVector} alt="" />
                <img src={youtubeVector} alt="" />
              </div>
              {influencer.categories.map((catergory) => {
                return (
                  <div className="categories">
                    <p>{catergory.category1}</p>
                    <p>{catergory.category2}</p>
                    <p>{catergory.category3}</p>
                  </div>
                );
              })
              }
            </div>
            </Carousel>
          );
        })}
      <img src={back} alt="" className="back-btn" onClick={()=>slider.current.next()}/>
      </div>
    </div>
  );
}

export default Influencers;
