import Navbar from "./Navbar";
import './App.css'
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { loadallnotes } from "./actions/detailsaction";
import React,{ Component, useState ,useEffect}  from 'react'




function App() {


  return (
    <div className="App">
          <Navbar/>  
          <Sidebar/>  
          


    </div>
  );
}

export default App;
