import React from "react";
import "./Weather.css"
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">

    <div className="Header">
      <h1 className="city"> {props.data.city} </h1>
      <ul>
        <li className="date"> <FormatedDate date={props.data.date} /> </li>
        <li className="description"> {props.data.description} </li>
      </ul>
    </div>

    <div className="Weather">
      <div className="row">
        <div className="col-6">
            <WeatherIcon 
          code={props.data.icon} 
          />
          <span className="temperature"> {Math.round(props.data.temperature)} </span>
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
            <li> Humidity: {props.data.humidity}%</li>
            <li> Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    )
}