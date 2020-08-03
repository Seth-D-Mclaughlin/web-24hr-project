import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import UserInfo from "./components/UserInfo/UserInfo"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserInfo/>
    </div>
  );
}

export default App;
