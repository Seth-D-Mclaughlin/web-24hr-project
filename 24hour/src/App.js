import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Zomato from "./components/Zomato/Zomato";
import Weather from "./components/Weather/weather";
import UserInfo from "./components/UserInfo/UserInfo"
import NasaApp from './components/NASA/NASA';
//import NASAResults from './components/NASA/NASAResults';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserInfo/>
      {/* <NasaApp/>
      <Weather />
      <Zomato/> */}
    </div>
  );
}

export default App;
