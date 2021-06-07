import React, {useState} from "react";
import FormatedDate from "./FormatedDate";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
 
  const[weatherData, setWeatherData]=useState({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true, 
      temperature: response.data.main.temp,
      humidity:Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      city: response.data.name,
    });
   
    
  }

  if (weatherData.ready) { 
    return (
      <div className="App">
        
      <div className="Search">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search 🔍" className="btn btn-light w-100" />
          </div>
        </div>
      </form>
    </div>

    <div className="Header">
      <h1 className="city"> {weatherData.city} </h1>
      <ul>
        <li className="date"> <FormatedDate date={weatherData.date} /> </li>
        <li className="description"> {weatherData.description} </li>
      </ul>
    </div>

    <div className="Weather">
      
      <div className="row">
        <div className="col-6">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="weather"
          ></img>
          <span className="temperature"> {Math.round(weatherData.temperature)} </span>
          <span className="units">
            <a href="/" className="active">
              {" "}
              ºC{" "}
            </a>{" "}
            |<a href="/"> ºF </a>
          </span>
        </div>
        <div className="col-6 currentData">
          <ul>
            <li> Precipitation: %</li>
            <li> Humidity: {weatherData.humidity} %</li>
            <li> Wind: {weatherData.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );

  } else { 

  const apiKey= "91a393a925da1a29653db26755f33f28";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  
  return "Loading";
} 
}
