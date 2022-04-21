import { useState } from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Notifications from "./pages/Notifications";
import Search from "./pages/Search";

function App() {
  const [show, setShow] = useState(false);
  return (
    <BrowserRouter>
      <div>
        <Navbar show={show} setShow={setShow} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/notifications" exact element={<Notifications />} />
          <Route path="/search" exact element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
