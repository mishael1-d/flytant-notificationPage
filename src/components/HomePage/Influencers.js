import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import fbVector from "../../assets/fb-vector.png";
import linkVector from "../../assets/link-vector.png";
import instaVector from "../../assets/insta-vector.png";
import youtubeVector from "../../assets/youtube-vector.png";
import back from '../../assets/back-btn.png'
function Influencers() {
  return (
    <div className="influencerContainer">
      <h3>Featured Influencers</h3>
      <div className="influencer-details">
        <div className="influencers">
          <div className="influencer-image">
            <img src={image1} alt="" />
          </div>
          <div className="influencer-info">
            <span className="influencer-name">Mishael</span>
            <span className="influencer-location">Nigeria</span>
          </div>
          <div className="sm-icons">
            <img src={instaVector} alt="" />
            <img src={fbVector} alt="" />
            <img src={linkVector} alt="" />
            <img src={youtubeVector} alt="" />
          </div>
          <div className="categories">
            <p>Dancing</p>
            <p>Dancing</p>
            <p>Dancing</p>
          </div>
        </div>
        <div className="influencers">
          <div className="influencer-image">
            <img src={image2} alt="" />
          </div>
          <div className="influencer-info">
            <span className="influencer-name">Mishael</span>
            <span className="influencer-location">Nigeria</span>
          </div>
          <div className="sm-icons">
            <img src={instaVector} alt="" />
            <img src={fbVector} alt="" />
            <img src={linkVector} alt="" />
            <img src={youtubeVector} alt="" />
          </div>
          <div className="categories">
            <p>Dancing</p>
            <p>Dancing</p>
            <p>Dancing</p>
          </div>
        </div>
        <div className="influencers">
          <div className="influencer-image">
            <img src={image3} alt="" />
          </div>
          <div className="influencer-info">
            <span className="influencer-name">Mishael</span>
            <span className="influencer-location">Nigeria</span>
          </div>
          <div className="sm-icons">
            <img src={instaVector} alt="" />
            <img src={fbVector} alt="" />
            <img src={linkVector} alt="" />
            <img src={youtubeVector} alt="" />
          </div>
          <div className="categories">
            <p>Dancing</p>
            <p>Dancing</p>
            <p>Dancing</p>
          </div>
        </div>
        <div className="influencers">
          <div className="influencer-image">
            <img src={image4} alt="" />
          </div>
          <div className="influencer-info">
            <span className="influencer-name">Mishael</span>
            <span className="influencer-location">Nigeria</span>
          </div>
          <div className="sm-icons">
            <img src={instaVector} alt="" />
            <img src={fbVector} alt="" />
            <img src={linkVector} alt="" />
            <img src={youtubeVector} alt="" />
          </div>
          <div className="categories">
            <p>Dancing</p>
            <p>Dancing</p>
            <p>Dancing</p>
          </div>
        </div>
      </div>
        <img src={back} alt="" className="back-btn" />
    </div>
  );
}

export default Influencers;
