import './App.css';
import Users from './Components/AllUsers/Users';
import Header from './Components/Header/Header';
import React, { useState } from "react";

function App() {
  const [addList, setAddList]=useState(false)
  const buttonClicked=()=>{
    setAddList(true)
  }
  return (
    <div className="bg-container">
      <div>
      <Header buttonClick={()=>{buttonClicked()}}/>
      {addList?<Users/>:""}
      </div>
    </div>
  )
}

export default App;