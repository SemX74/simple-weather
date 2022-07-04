import React from 'react';

const List = ({fetched}) => {

    const {city,list} = fetched;

    const newList = list.filter((item,index) => {if(index <= 10){return item}})
    return (
        <ul className='List'>
            <h6>10 day forecast</h6>
            {newList.map((item,id) =>
             <li className='List-single' key={id}>
                <p>humidity = {item.humidity}</p>
                <p>pressure = {item.pressure}</p>
                <p>dt ={item.dt}</p>
            </li>
            )}
        </ul>

      );
}
 
export {List};