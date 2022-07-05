import React,{useState} from 'react';
import { options } from '../service/Options';

const Header = ({setFetched,setToday,setLoading,setErrors}) => {
  const [location, setLocation] = useState('')

  const handleChange = ({target}) => {
    setLocation(target.value)
  }
  
  const handleSubmit = () =>{
    fetch(`https://community-open-weather-map.p.rapidapi.com/climate/month?q=${location}`, options)
    .then(setLoading(true))
    .then(response => response.json())
    .then(data => setFetched(data))
    .catch(err => setErrors(err))
    .finally(setLoading(false))

    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${location}`, options)
	  .then(response => response.json())
	  .then(data => setToday(data))
	  .catch(err => setErrors(err));
    }

    return (
        <div className='Header'>
            <h1 className='Header-title'>React - Weather</h1>
            <div className='Header-input_wrapper'>
              <input placeholder='Enter your city here'  onChange={handleChange}value={location}/>
              <button style={location? {opacity:'100', position:'relative'}:{opacity:'0', position:'absolute'}} onClick={handleSubmit}>🔎</button>
            </div>
        </div>
      );

}
 
export {Header};