import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Weather from "./components/Weather/weather";
import UserInfo from "./components/UserInfo/UserInfo"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserInfo/>

      <Weather />
    </div>
  );
}

export default App;
