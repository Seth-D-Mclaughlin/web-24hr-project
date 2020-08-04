import React, { useState } from 'react';
import "./NASA.css";
const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
const key = 'cUXHyLqyZeyfoN8srsZYBAMxlZiGluWkQQvn2CSE';


const NasaApp = () => {
    //const [date, setDate] = useState('');
    const [lon, setLon] = useState('');
    const [lat, setLat] = useState('');
    const [date, setDate] = useState();
    //const [results, setResults] = useState([]);


    const fetchResults = () => {
        let url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${key}`;
        
        fetch(url)
            .then(res => res.json())
            .then(
                (results) => {
               console.log(results);
            },
            (err) => {
                console.log(err);
            })}
            // .then(data => console.log(data));
        
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
      };

        return (
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <span>Enter a long: </span>
                        <input type="float" name="lon" onChange={(e) => setLon(e.target.value)} /> 
                        <br />
                        <span>Enter a lat: </span>
                        <input type="float" name="lat"  onChange={(e) => setLat(e.target.value)} />
                        <br />
                        <span>Enter Date: </span>
                        <input type="date" name="date" pattern="[0-9]{8}" onChange={(e) => setDate(e.target.value)} />
                        <br />
                        <button className="submit">Submit search</button>
                    </form>
                    {/* {
                        results.length > 0 ? <NytResults results={results} changePage={changePageNumber} /> : null
                    } */}
                </div>
            </div>
        );
    }


export default NasaApp;