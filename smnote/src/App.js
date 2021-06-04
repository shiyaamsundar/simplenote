import Navbar from "./Navbar";
import "./App.css";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { loadallnotes } from "./actions/detailsaction";
import React, { Component, useState, useEffect } from "react";
import Navflex from "./Navflex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="col-1">
          <Sidebar />
        </div>
        <div className="col-2">
          <Mainbar />
        </div>
      </div>
      {/* <Sidebar />
      <Mainbar /> */}
    </div>
  );
}

export default App;
