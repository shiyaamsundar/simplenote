import React from 'react'
import { useSelector } from 'react-redux'
import "./App.css"
import Mainbar from './Mainbar'
import Menu from './Menu'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


function App(){

  const t=useSelector(state=>state.toggler)

  return (
    <div className="App">
      <Navbar/>
      <div className="">
      {/* <Menu className="mm"/> */}
<Sidebar className="sd"/>
      
      <Mainbar/>
      </div>
    </div>
  )
}

export default App

