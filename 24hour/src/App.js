import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Weather from "./components/Weather/weather";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Weather />
    </div>
  );
}

export default App;
