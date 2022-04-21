import React, { useState } from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import { person } from "../person";
import fb from "../assets/d-fb-vector.png";
import insta from "../assets/d-insta-vector.png";
import link from "../assets/d-link-vector.png";
import ytb from "../assets/d-ytb-vector.png";
import Pagination from "../components/Pagination";
import Subfooter from "../components/Subfooter";
import Footer from "../components/Footer";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Search } = Input;
function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  const indexOfLastPage = currentPage * postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentPost = person.slice(indexOfFirstPage, indexOfLastPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();
  const onSearch = () => {
    navigate("/search");
  };
  return (
    <>
      <div className="searchPage">
        <div className="container-fluid">
          <div className="input-grp">
            <div className="search-grp">
              <Search
                className="search-btn"
                placeholder="Top influencers by social score"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
            <div className="downloadBtn">
              <button>Download data</button>
            </div>
          </div>
          <div className="header-links">
            <Tabs defaultActiveKey="1" onChange={callback} animated>
              <TabPane className="span" tab="All" key="1">
              <div className="search-result">
            <p className="search-result-title">
              Search result for: Top Influencers by Social Score
            </p>
            <p className="search-result-subtitle">
              {`Total ${person.length - 1}+ search results found`}
            </p>
          </div>
          <div className="result-cards">
            {currentPost.map((person) => {
              return (
                <div className="cards" key={person.id}>
                  <img src={person.image} alt="" className="card-img" />
                  <div className="card-info">
                    <h3 className="card-info-name">{person.name}</h3>
                    <p className="card-info-details">{person.details}</p>
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
              );
            })}
          </div>
              </TabPane>
              <TabPane  tab="Instagram" key="2" className="disabled">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Youtube" key="3" className="disabled">
                Content of Tab Pane 3
              </TabPane>
              <TabPane  tab="Twitter" key="4" className="disabled">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </div>
          <Pagination
            postPerPage={postPerPage}
            totalPost={person.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          
        </div>
        <Subfooter />
        <Footer />
      </div>
    </>
  );
}

export default SearchPage;
