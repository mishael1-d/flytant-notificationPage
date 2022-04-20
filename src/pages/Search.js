import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import fb from "../assets/d-fb-vector.png";
import insta from "../assets/d-insta-vector.png";
import link from "../assets/d-link-vector.png";
import ytb from "../assets/d-ytb-vector.png";
import Pagination from "../components/Pagination";
import Subfooter from "../components/Subfooter";
import Footer from "../components/Footer";
function Search() {
  return (
    <>
      <div className="searchPage">
        <div className="container-fluid">
          <div className="input-grp">
            <div className="search-grp">
              <input
                type="search"
                placeholder="Top influencers by social score"
              />
              <button type="search">Search</button>
            </div>
            <div className="downloadBtn">
              <button>Download data</button>
            </div>
          </div>
          <div className="header-links">
            <span className="active">All</span>
            <span className="disabled">Instagram</span>
            <span className="disabled">Youtube</span>
            <span className="disabled">Twitter</span>
          </div>
          <div className="search-result">
            <p className="search-result-title">
              Search result for: Top Influencers by Social Score
            </p>
            <p className="search-result-subtitle">
              Total 324+ search results found
            </p>
          </div>
          <div className="result-cards">
            <div className="cards">
              <img src={person1} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-info-name">Andrew Dale</h3>
                <p className="card-info-details">
                  Take one of Take one of Udemy’s range of Python courses and
                  learn how to code using this incredibly useful. Python courses
                  and learn how to code using this incredibly useful.
                </p>
                <div className="sm-icons">
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                  <img src={ytb} alt="" />
                </div>
                <div className="categories">
                  <p>Fashion</p>
                  <p>Makeup</p>
                  <p>Beauty</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <img src={person2} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-info-name">Andrew Dale</h3>
                <p className="card-info-details">
                  Take one of Take one of Udemy’s range of Python courses and
                  learn how to code using this incredibly useful. Python courses
                  and learn how to code using this incredibly useful.
                </p>
                <div className="sm-icons">
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                  <img src={ytb} alt="" />
                </div>
                <div className="categories">
                  <p>Fashion</p>
                  <p>Makeup</p>
                  <p>Beauty</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <img src={person1} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-info-name">Andrew Dale</h3>
                <p className="card-info-details">
                  Take one of Take one of Udemy’s range of Python courses and
                  learn how to code using this incredibly useful. Python courses
                  and learn how to code using this incredibly useful.
                </p>
                <div className="sm-icons">
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                  <img src={ytb} alt="" />
                </div>
                <div className="categories">
                  <p>Fashion</p>
                  <p>Makeup</p>
                  <p>Beauty</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <img src={person2} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-info-name">Andrew Dale</h3>
                <p className="card-info-details">
                  Take one of Take one of Udemy’s range of Python courses and
                  learn how to code using this incredibly useful. Python courses
                  and learn how to code using this incredibly useful.
                </p>
                <div className="sm-icons">
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                  <img src={ytb} alt="" />
                </div>
                <div className="categories">
                  <p>Fashion</p>
                  <p>Makeup</p>
                  <p>Beauty</p>
                </div>
              </div>
            </div>
            <div className="cards">
              <img src={person1} alt="" className="card-img" />
              <div className="card-info">
                <h3 className="card-info-name">Andrew Dale</h3>
                <p className="card-info-details">
                  Take one of Take one of Udemy’s range of Python courses and
                  learn how to code using this incredibly useful. Python courses
                  and learn how to code using this incredibly useful.
                </p>
                <div className="sm-icons">
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                  <img src={ytb} alt="" />
                </div>
                <div className="categories">
                  <p>Fashion</p>
                  <p>Makeup</p>
                  <p>Beauty</p>
                </div>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
        <Subfooter />
      <Footer />
      </div>
    </>
  );
}

export default Search;
