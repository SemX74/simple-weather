import React from 'react';

const Today = ({today}) => {

    const parseCelsius = (number) =>{
        return parseInt(number - 273.15)
    }

    const {clouds, coord,id,main,name,sys,timezone,weather,visibility,wind} = today;
    const weatherValue = weather[0];

    return (
        <div className='Today'>
            <h2>{name}</h2>
            <h1>{parseCelsius(main.temp)}°</h1>
            <h4>{weatherValue.main}</h4>
            <p>{weatherValue.description}</p>
            <p>Max:{parseCelsius(main.temp_max)}°, min:{parseCelsius(main.temp_max)}°</p>

        </div>
      );
}
 
export {Today};