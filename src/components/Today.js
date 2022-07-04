import React from 'react';

const Today = ({today,parseCelsius,todayDate}) => {

    const {clouds, coord,id,main,name,sys,timezone,weather,visibility,wind} = today;
    const weatherValue = weather[0];
    const time = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();
    return (
        <div className='Today'>
            <p style={{fontSize:'.5em'}}>Refreshed: {time} </p>
            <h2>{name}</h2>
            <h1>{parseCelsius(main.temp)}°</h1>
            <h4>{weatherValue.main}</h4>
            <p>{weatherValue.description}</p>
            <p>Max:{parseCelsius(main.temp_max)}°, min:{parseCelsius(main.temp_max)}°</p>
            <div className='Today-cell_wrapper'>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Visibility</h4>
                    <p className='Today-cell_subtitle'>{visibility>9000? 'Its no fog outside' : 'A little foggy outside'}</p>
                </div>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Clouds</h4>
                    <p className='Today-cell_subtitle'>{clouds.all === 0 ? 'No clouds' : 'Cloudy'}</p>
                </div>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Pressure</h4>
                    <p className='Today-cell_subtitle'>{main.pressure} hPa</p>
                </div>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Humidity</h4>
                    <p className='Today-cell_subtitle'>{main.humidity}%</p>
                </div>
            </div>
        </div>
      );
}
 
export {Today};