import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
 
  const[weatherData, setWeatherData]=useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true, 
      temperature: response.data.main.temp,
      humidity:Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      date: new Date(response.data.dt*1000),
      description: response.data.weather[0].description,
      icon:response.data.weather[0].icon,
      city: response.data.name,
    });
    
  }

function search(){
  const apiKey= "91a393a925da1a29653db26755f33f28";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleCityChange(event){
  setCity(event.target.value);

}

  if (weatherData.ready) { 
    return (
      <div className="App">
        
      <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search 🔍" className="btn btn-light w-100" />
          </div>
        </div>
      </form>
    </div>

<WeatherInfo data={weatherData} />
    
    </div>
  );

  } else { 
    search();
  return "Loading";
} 
}
