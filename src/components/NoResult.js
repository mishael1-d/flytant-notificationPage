import React from "react";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";
import Subfooter from "../components/Subfooter";
import Footer from "../components/Footer";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const { Search } = Input;
function NoResult() {
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
            <h3>Top influencers by social score</h3>
            <Tabs defaultActiveKey="1" onChange={callback} animated>
              <TabPane className="span" tab="All" key="1">
                <div className="search-result">
                  <p className="no-result-subtitle">
                    {`Total 0 search results found`}
                  </p>
                </div>
                <div className="no-result-cards">
                  <p>
                    This search term has less data, <br />
                    we will look into this for you.
                  </p>
                  <div className="suggestion">
                    <p className="suggestion-title">Try with these searches</p>
                    <span>Top influencers</span>
                    <span>Fashion bloggers</span>
                    <span>Fashion bloggers</span>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Instagram" key="2" className="disabled">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Youtube" key="3" className="disabled">
                Content of Tab Pane 3
              </TabPane>
              <TabPane tab="Twitter" key="4" className="disabled">
                Content of Tab Pane 4
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
      <Subfooter />
      <Footer />
    </>
  );
}

export default NoResult;
