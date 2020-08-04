import React, { useState } from "react";
import "./UserInfo"
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?"
const key =" ";
  const  UserInfo = (props) =>{
  const[zip, setZip] = useState(46077);
  const[date, setDate] = useState(Date.getDate());
      
  const fetchResults = () => {
    let url = `${baseUrl}zip=${zip}&appid=${key}`;

    fetch(url)
    .then(res => res.json())
  }
  
  
  
  
  
  return (
        <form>
          <label>
            Zipcode:
            <input type="number" value={zip}  />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }

  export default UserInfo;