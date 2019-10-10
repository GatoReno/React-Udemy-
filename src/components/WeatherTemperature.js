import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons =  {
    sunny: "day-sunny",
    fog: "day-fog",
    cloud: "cloud",
    cloudy: "cloudy",
    rain: "rain",
    snow: "snow",
    windy: "windy"
};
const getWeatherIcon  = weatherState => {
    const icon = icons[weatherState];

    if(icon){
        return  <WeatherIcons name={icon} size="2x"/>;
    }else{
        return  <WeatherIcons name={"day-sunny"} size="2x"/>;
    }
  
}
const WeatherTemperature = ({temperature, weatherState})=>(
    <div><small>
        {
            getWeatherIcon(weatherState)
        }
        <br/>
        <span>{ `${temperature} C° `}</span>
        </small></div>
);


WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired   
};
export default WeatherTemperature;