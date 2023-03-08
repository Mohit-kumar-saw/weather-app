import React, { useState } from "react";
import "./style.scss";
import axios from "axios";


function App() {

  const [data,setData]=useState({})
  const [location,setLocation]=useState('')
  const [loc,setLoc]=useState('')
  const [temp,setTemp]=useState('')
  const [desc,setDesc]=useState('')
  const [feel,setFeel]=useState('')
  const [humid,setHumid]=useState('')
  const [wind,setWind]=useState('')
 

   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f8d7a0581606e5c15b03c74a510963d8 `

   const handleSearch=()=>{
      let value=document.querySelector('.input').value;
      setLocation(value)
      searchLocation();
   }
   const searchLocation =async()=>{
    
    const res=await fetch(url)
    let data= await res.json()
 
    getData(data)
    }
    // setLocation('')
   let getData=(data)=>{
     console.log(data.name)
     setLoc(data.name)
     {data.main? setTemp(data.main.temp.toFixed()):null}
     {data.weather? setDesc(data.weather[0].main):null}
     setFeel(data.main.feels_like.toFixed())
     setHumid(data.main.humidity)
     setWind(data.wind.speed)
     
   }

  return (
    <div className="app">

    <div className="search">
      <input className="input" type="search" placeholder="Enter your location" />
      <button onClick={handleSearch}>search</button>
    </div>

      <div className="container">

        <div className="top">
          <div className="location">
            <p>{loc}</p>
          </div>
          <div className="temp">
            <h1>{temp}°C</h1>
            <div className="description">
            
            {desc}
          </div>
          </div>
          
        </div>

        <div className="bottom">
          <div className="feels ">
            <p className="bold">{feel}°C</p>
            <p className="fontSize">Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">{humid}%</p>
            <p className="fontSize">Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">{wind}<span className="mph">MPH</span></p>
            <p className="fontSize">Winds</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
