import React, { useState } from 'react'
import './weather.css';
import search_icon from '../assets/Assets/search.png';
import clear_icon from '../assets/Assets/clear.png';
import cloud_icon from '../assets/Assets/cloud.png';
import drizzle_icon from '../assets/Assets/drizzle.png';
import rain_icon from '../assets/Assets/rain.png';
import snow_icon from '../assets/Assets/snow.png';
import wind_icon from '../assets/Assets/wind.png';
import humidity_icon from '../assets/Assets/humidity.png';

const Weatherapp = () => {
    let apiKey = '5a0d610f22a507126e520d19d607dea9';
    const [wicon,setWicon] = useState(cloud_icon);

    const search = async()=>{
        const element= document.getElementsByClassName('cityName');
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

        

        if(element[0].value ===''){
            return 0;
            
        }
        let response = await fetch(url);
        let data = await response.json();
        console.log({data});
        const humidit = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-rate');
        const temp = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location')

        humidit[0].innerHTML = data.main.humidity+" %";
        wind[0].innerHTML = data.wind.speed+" Km/hr";
        temp[0].innerHTML = Math.floor(data.main.temp)+" °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n'){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n'){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n'){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n'){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n'){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }
    }
  return (
    <>
        <h2 style={{textAlign:'center',fontWeight:'600',letterSpacing:'2px'}}>Weather App using React</h2>
        <div className='container'>
        
            <div className='top-bar'>
            <input type='text' placeholder='Enter to search..' className='cityName'/>
            <div className='search-icon' onClick={()=>{search()}}>
                <img src={search_icon}/>
            </div>
            </div>
            <div className='weather-image'>
            <img src={wicon} />
            </div>
            <div className='weather-temp'>
            
            </div>
            <div className='weather-location'>
            
            </div>
            <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percent">
                        
                    </div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="wind-rate">
                        
                    </div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Weatherapp
