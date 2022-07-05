import React from 'react';

const Today = ({today,parseCelsius,todayDate,errors}) => {

    const time = todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();

    
    if (!errors) {
        const {clouds, coord,id,main,name,sys,timezone,weather,visibility,wind} = today;
        const styles = { 
            transform: `rotate(${wind.deg}deg)` 
        };
        const weatherValue = weather[0];
        
        return (
        <div className='Today'>
            <p style={{fontSize:'.5em'}}>Refreshed: {time} </p>
            <div className='Today-Title_wrapper'>
                <div className='TitleLeft'>
                    <h1 className='Title-temp'>{parseCelsius(main.temp)}°</h1>
                    <h2 className='Title-name'>{name}</h2>
                </div>
                <div className='SubtitleRight'>
                    <h4>{weatherValue.main}</h4>
                    <p>{weatherValue.description}</p>
                    <p>Max:{parseCelsius(main.temp_max)}°, min:{parseCelsius(main.temp_max)}°</p>
                </div>
            </div>
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
                    <h4 className='Today-cell_title'>Feels like</h4>
                    <p className='Today-cell_subtitle'>{parseCelsius(main.feels_like)} ℃</p>
                </div>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Pressure</h4>
                    <p className='Today-cell_subtitle'>{main.pressure} hPa</p>
                </div>
                <div style={{paddingBottom:'.2em'}} className='Today-cell'>
                    <h4 style={{marginBottom:'.4em'}} className='Today-cell_title'>Wind</h4>
                    <div className='Today-cell_subtitle wind' style={styles} ><div className='windArrow'></div></div>
                    <p className='Today-cell_subtitle'>{wind.speed} km/h</p>
                </div>
                <div className='Today-cell'>
                    <h4 className='Today-cell_title'>Humidity</h4>
                    <p className='Today-cell_subtitle'>{main.humidity}%</p>
                </div>
            </div>
        </div>
      )};
}
 
export {Today};