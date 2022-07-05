import React,{useEffect} from 'react';

const List = ({fetched,parseCelsius,todayDate,errors}) => {

    if (!errors) {
        const {city,list} = fetched;
        const newList = list.filter((item,index) => index <= 10)
        
        return (
        <ul className='List'>
            <h6>10 day forecast</h6>
            <div className='List-info'>
                <p>Date</p>
                <p>Temp, ℃</p>
                <p>Humidity, %</p>
                <p>Pressure, hPA</p>
                <p>Wind, m/s</p>
            </div>
            {newList.map((item,id) =>
             <li className='List-single' key={id}>
                <p>{id !== 0? todayDate.toLocaleString('default', { month: 'short' }) : ''} {id===0? 'Today' : todayDate.getDate()+id}</p>
                <p>{parseCelsius(item.temp.average)}</p>
                <p>{item.humidity}</p>
                <p>{item.pressure}</p>
                <p>{item.wind_speed}</p>
            </li>
            )}
        </ul>

      )};
}
 
export {List};